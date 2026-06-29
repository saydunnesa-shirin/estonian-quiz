import { useState } from 'react';
import Quiz from './components/Quiz';
import Results from './components/Results';

export default function App() {
  const [view, setView]           = useState('start'); // 'start' | 'quiz' | 'results'
  const [quizLength, setQuizLength] = useState(10);
  const [result, setResult]       = useState(null);

  function handleComplete(r) {
    setResult(r);
    setView('results');
  }

  return (
    <div className="app">
      <header className="app-header">
        <span className="flag">🇪🇪</span>
        <h1>Estonian A2 Quiz</h1>
        <p>Noun declension practice</p>
      </header>

      <main>
        {view === 'start' && (
          <div className="start-screen">
            <div className="card">
              <h2>Ready to practice?</h2>
              <p className="start-desc">
                You'll be given a word and asked for one of its 6 declension forms.
                Up to 3 wrong attempts per question before the answer is revealed.
              </p>

              <label className="length-label">
                Questions per round
                <select
                  value={quizLength}
                  onChange={(e) => setQuizLength(Number(e.target.value))}
                  className="length-select"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </select>
              </label>

              <button className="btn-primary" onClick={() => setView('quiz')}>
                Start Quiz
              </button>
            </div>
          </div>
        )}

        {view === 'quiz' && (
          <Quiz quizLength={quizLength} onComplete={handleComplete} />
        )}

        {view === 'results' && result && (
          <Results result={result} onRestart={() => setView('start')} />
        )}
      </main>
    </div>
  );
}
