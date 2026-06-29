import { useState } from 'react';
import { verbs, MA_TRIGGERS, DA_TRIGGERS } from '../data/verbs';

const VERB_QUIZ_LENGTH = 10;

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function generateVerbQuestions(count) {
  const allTriggers = [
    ...MA_TRIGGERS.map((t) => ({ ...t, form: 'ma' })),
    ...DA_TRIGGERS.map((t) => ({ ...t, form: 'da' })),
  ];

  const questions = [];
  for (let i = 0; i < count; i++) {
    const trigger   = allTriggers[Math.floor(Math.random() * allTriggers.length)];
    const verb      = verbs[Math.floor(Math.random() * verbs.length)];
    const correctAnswer = verb[trigger.form];

    // Best distractor: the WRONG form of the SAME verb (e.g. reisima vs reisida)
    const wrongForm = verb[trigger.form === 'ma' ? 'da' : 'ma'];

    // Two more: other verbs' correct form (same form type, so same ending style)
    const otherCorrect = shuffle(verbs.filter((v) => v !== verb))
      .slice(0, 6)
      .map((v) => v[trigger.form]);

    const wrongPool = [...new Set([wrongForm, ...otherCorrect])].filter(
      (v) => v !== correctAnswer
    );

    const options = shuffle([correctAnswer, ...shuffle(wrongPool).slice(0, 3)]);

    questions.push({ trigger, verb, correctAnswer, options });
  }
  return questions;
}

// ── VerbQuiz component ────────────────────────────────────────────────────

export default function VerbQuiz({ onComplete }) {
  const [questions] = useState(() => generateVerbQuestions(VERB_QUIZ_LENGTH));
  const [currentIdx, setCurrentIdx]       = useState(0);
  const [score, setScore]                 = useState({ correct: 0, wrong: 0 });
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [clickedWrong, setClickedWrong]   = useState([]);
  const [correctClicked, setCorrectClicked] = useState(false);
  const [revealed, setRevealed]           = useState(false);
  const [questionDone, setQuestionDone]   = useState(false);

  const q = questions[currentIdx];
  const MAX_WRONG = 3;
  const isDA = q.trigger.form === 'da';

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

  function handleClick(option) {
    if (questionDone || clickedWrong.includes(option)) return;

    if (option === q.correctAnswer) {
      const newScore = { correct: score.correct + 1, wrong: score.wrong };
      setScore(newScore);
      setCorrectClicked(true);
      setQuestionDone(true);
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

  function optionClass(option) {
    if (option === q.correctAnswer && (correctClicked || revealed)) return 'option correct';
    if (clickedWrong.includes(option)) return 'option wrong';
    if (questionDone) return 'option disabled';
    return 'option';
  }

  const attemptsLeft = MAX_WRONG - wrongAttempts;
  const progress     = (currentIdx / questions.length) * 100;

  return (
    <div className="quiz">
      {/* Progress bar */}
      <div className="progress-bar-wrap">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-text">
        Verb Quiz · Question {currentIdx + 1} / {questions.length}
        <span className="score-inline">✓ {score.correct}</span>
      </div>

      {/* Question card */}
      <div className="card">
        <div className="card-top-row">
          <div className="chapter-tag">Verb Forms</div>
          <div className={`difficulty-badge ${isDA ? 'badge-da' : 'badge-ma'}`}>
            {isDA ? '-DA form' : '-MA form'}
          </div>
        </div>

        {/* Sentence with blank */}
        <p className="question-text">
          Complete the sentence:
        </p>
        <p className="verb-sentence">
          <strong>{q.trigger.sentence}</strong>{' '}
          <span className="verb-blank">_____</span> ?
        </p>
        <p className="verb-hint">
          <em>({q.trigger.english} {q.verb.english})</em>
        </p>

        {/* Attempts warning */}
        {wrongAttempts > 0 && !revealed && (
          <p className="attempts-warning">
            ⚠️ {attemptsLeft} attempt{attemptsLeft !== 1 ? 's' : ''} remaining
          </p>
        )}

        {/* Options */}
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

        {correctClicked && <p className="feedback-correct">✓ Correct!</p>}

        {revealed && (
          <div className="revealed">
            <p>
              The correct answer is: <strong>{q.correctAnswer}</strong>
              {' '}— because <em>{q.trigger.sentence}</em> uses the{' '}
              <strong>{isDA ? '-DA' : '-MA'} form</strong>.
            </p>
            <button className="btn-next" onClick={() => goToNext()}>Next →</button>
          </div>
        )}
      </div>
    </div>
  );
}
