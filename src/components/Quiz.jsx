import { useState } from 'react';
import { vocabulary, FORM_KEYS, FORM_CASE_NAMES } from '../data/vocabulary';

// ── Question generation ────────────────────────────────────────────────────

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ── Difficulty-aware wrong answer selection ────────────────────────────────
// difficulty 0 = easy   → random words, any chapter, same form
// difficulty 1 = medium → same-chapter words OR other forms of same word mixed in
// difficulty 2 = hard   → other forms of the SAME word first (most confusing),
//                         topped up with same-chapter same-form words

function getWrongOptions(word, formKey, correctAnswer, difficulty) {
  const unique = (arr) => [...new Set(arr)].filter((v) => v !== correctAnswer);

  // Other forms of the same word (e.g. ask pl.nom, offer pl.gen / pl.part as traps)
  const sameWordOtherForms = unique(
    FORM_KEYS.filter((k) => k !== formKey).map((k) => word.forms[k])
  );

  // Same chapter, same form (similar domain, same grammatical slot)
  const sameChapterSameForm = unique(
    vocabulary
      .filter((w) => w !== word && w.chapter === word.chapter)
      .map((w) => w.forms[formKey])
  );

  // Global fallback: any word, same form
  const globalSameForm = unique(
    vocabulary.filter((w) => w !== word).map((w) => w.forms[formKey])
  );

  let pool;
  if (difficulty === 0) {
    // Easy: anything goes — pick from global pool (varied, visually distinct)
    pool = globalSameForm;
  } else if (difficulty === 1) {
    // Medium: prioritise same-chapter words, mix in some other forms of same word
    pool = unique([...shuffle(sameChapterSameForm), ...shuffle(sameWordOtherForms), ...globalSameForm]);
  } else {
    // Hard: lead with other forms of the same word (maximally confusing),
    //        then same-chapter same-form, then global fallback
    pool = unique([...shuffle(sameWordOtherForms), ...shuffle(sameChapterSameForm), ...globalSameForm]);
  }

  return shuffle(pool).slice(0, 3);
}

function generateQuestions(count) {
  const questions = [];

  for (let i = 0; i < count; i++) {
    // Gradually increase difficulty: easy → medium → hard across the session
    const difficulty = Math.min(2, Math.floor((i / count) * 3)); // 0, 1, or 2

    const word = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    const formKey = FORM_KEYS[Math.floor(Math.random() * FORM_KEYS.length)];
    const correctAnswer = word.forms[formKey];

    const wrongOptions = getWrongOptions(word, formKey, correctAnswer, difficulty);
    const options = shuffle([correctAnswer, ...wrongOptions]);

    questions.push({ word, formKey, correctAnswer, options, difficulty });
  }

  return questions;
}

// ── Quiz component ─────────────────────────────────────────────────────────

export default function Quiz({ quizLength, onComplete }) {
  const [questions] = useState(() => generateQuestions(quizLength));
  const [currentIdx, setCurrentIdx]     = useState(0);
  const [score, setScore]               = useState({ correct: 0, wrong: 0 });
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [clickedWrong, setClickedWrong] = useState([]); // options already clicked wrong
  const [correctClicked, setCorrectClicked] = useState(false);
  const [revealed, setRevealed]         = useState(false); // shown after 3 wrong attempts
  const [questionDone, setQuestionDone] = useState(false);

  const q = questions[currentIdx];
  const MAX_WRONG = 3;

  // ── Advance to next question or finish quiz ──
  function goToNext(finalScore) {
    const s = finalScore ?? score;
    if (currentIdx + 1 >= questions.length) {
      onComplete({ correct: s.correct, total: questions.length });
    } else {
      setCurrentIdx((i) => i + 1);
      setWrongAttempts(0);
      setClickedWrong([]);
      setCorrectClicked(false);
      setRevealed(false);
      setQuestionDone(false);
    }
  }

  // ── Handle option click ──
  function handleClick(option) {
    if (questionDone || clickedWrong.includes(option)) return;

    if (option === q.correctAnswer) {
      const newScore = { correct: score.correct + 1, wrong: score.wrong };
      setScore(newScore);
      setCorrectClicked(true);
      setQuestionDone(true);
      // Auto-advance after a short pause so user can see the green highlight
      setTimeout(() => goToNext(newScore), 900);
    } else {
      const newWrong = wrongAttempts + 1;
      setWrongAttempts(newWrong);
      setClickedWrong((prev) => [...prev, option]);

      if (newWrong >= MAX_WRONG) {
        const newScore = { correct: score.correct, wrong: score.wrong + 1 };
        setScore(newScore);
        setRevealed(true);
        setQuestionDone(true);
      }
    }
  }

  // ── Option CSS class ──
  function optionClass(option) {
    if (option === q.correctAnswer && (correctClicked || revealed)) return 'option correct';
    if (clickedWrong.includes(option)) return 'option wrong';
    if (questionDone) return 'option disabled';
    return 'option';
  }

  const attemptsLeft = MAX_WRONG - wrongAttempts;
  const progress = ((currentIdx) / questions.length) * 100;

  return (
    <div className="quiz">
      {/* ── Progress bar ── */}
      <div className="progress-bar-wrap">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-text">
        Question {currentIdx + 1} / {questions.length}
        <span className="score-inline">✓ {score.correct}</span>
      </div>

      {/* ── Question card ── */}
      <div className="card">
        <div className="card-top-row">
          <div className="chapter-tag">{q.word.chapter}</div>
          <div className={`difficulty-badge diff-${q.difficulty}`}>
            {['Easy', 'Medium', 'Hard'][q.difficulty]}
          </div>
        </div>

        <p className="question-text">
          What is the{' '}
          <strong>{q.formKey}</strong>
          {' '}
          <span className="case-name">({FORM_CASE_NAMES[q.formKey]})</span>
          {' '}of{' '}
          <strong className="word-highlight">{q.word.forms['1st Form (sing. nom.)']}</strong>
          {' '}
          <span className="english-hint">({q.word.english})</span>?
        </p>

        {/* ── Attempts warning ── */}
        {wrongAttempts > 0 && !revealed && (
          <p className="attempts-warning">
            ⚠️ {attemptsLeft} attempt{attemptsLeft !== 1 ? 's' : ''} remaining
          </p>
        )}

        {/* ── Options ── */}
        <div className="options">
          {q.options.map((option, i) => (
            <button
              key={option}
              className={optionClass(option)}
              onClick={() => handleClick(option)}
              disabled={questionDone || clickedWrong.includes(option)}
            >
              <span className="option-letter">{String.fromCharCode(97 + i)}</span>
              {option}
            </button>
          ))}
        </div>

        {/* ── Feedback after correct ── */}
        {correctClicked && (
          <p className="feedback-correct">✓ Correct!</p>
        )}

        {/* ── Revealed after 3 wrong ── */}
        {revealed && (
          <div className="revealed">
            <p>The correct answer is: <strong>{q.correctAnswer}</strong></p>
            <button className="btn-next" onClick={() => goToNext()}>
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
