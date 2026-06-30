import { useState } from 'react';
import pronounQuestions from '../data/pronounQuestions';

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function generateQuestions(count) {
  return shuffle(pronounQuestions).slice(0, Math.min(count, pronounQuestions.length));
}

// Badge color per grammatical rule
const BADGE = {
  'kellele':        'badge-kellele',
  'kellel on':      'badge-kellel',
  'kellelt':        'badge-kellelt',
  'keda':           'badge-keda',
  'kelle (omastav)':'badge-kelle',
};

export default function PronounQuiz({ quizLength, onComplete }) {
  const [questions]   = useState(() => generateQuestions(quizLength));
  const [currentIdx, setCurrentIdx]         = useState(0);
  const [score, setScore]                   = useState({ correct: 0, wrong: 0 });
  const [wrongAttempts, setWrongAttempts]   = useState(0);
  const [clickedWrong, setClickedWrong]     = useState([]);
  const [correctClicked, setCorrectClicked] = useState(false);
  const [revealed, setRevealed]             = useState(false);
  const [questionDone, setQuestionDone]     = useState(false);

  const q = questions[currentIdx];
  const MAX_WRONG = 3;

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
  const badgeClass   = BADGE[q.rule] || 'badge-keda';

  // Split sentence at ___ so we can render a visual blank
  const [before, after] = q.sentence.split('___');

  return (
    <div className="quiz">
      {/* Progress bar */}
      <div className="progress-bar-wrap">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-text">
        Pronoun Quiz · Question {currentIdx + 1} / {questions.length}
        <span className="score-inline">✓ {score.correct}</span>
      </div>

      {/* Question card */}
      <div className="card">
        <div className="card-top-row">
          <div className="chapter-tag">Pronouns</div>
          <div className={`difficulty-badge ${badgeClass}`}>{q.rule}?</div>
        </div>

        <p className="question-text">Fill in the correct pronoun form:</p>
        <p className="verb-sentence">
          {before}<span className="verb-blank">___</span>{after}
        </p>

        {wrongAttempts > 0 && !revealed && (
          <p className="attempts-warning">
            ⚠️ {attemptsLeft} attempt{attemptsLeft !== 1 ? 's' : ''} remaining
          </p>
        )}

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
              <strong>{q.correctAnswer}</strong> — {q.explanation}
            </p>
            <button className="btn-next" onClick={() => goToNext()}>Next →</button>
          </div>
        )}
      </div>
    </div>
  );
}
