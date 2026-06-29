import { useState } from 'react';
import GrammarCard from './components/GrammarCard';
import VerbQuiz    from './components/VerbQuiz';
import Quiz        from './components/Quiz';
import Results     from './components/Results';

// view flow:
// 'start' → 'grammar' → 'verbQuiz' → 'quiz' → 'results'
//         ↘ (skip verbs)            ↗

export default function App() {
  const [view, setView]                 = useState('start');
  const [quizLength, setQuizLength]     = useState(10);
  const [includeVerbs, setIncludeVerbs] = useState(true);
  const [verbResult, setVerbResult]     = useState(null);
  const [declResult, setDeclResult]     = useState(null);

  function startQuiz() {
    setVerbResult(null);
    setDeclResult(null);
    setView(includeVerbs ? 'grammar' : 'quiz');
  }

  function handleVerbComplete(result) {
    setVerbResult(result);
    setView('quiz');
  }

  function handleDeclComplete(result) {
    setDeclResult(result);
    setView('results');
  }

  // Build scores breakdown for Results
  const scores = [];
  if (verbResult) scores.push({ label: 'Verb Quiz (-MA / -DA)', ...verbResult });
  if (declResult) scores.push({ label: 'Declension Quiz', ...declResult });
  const combined = scores.reduce(
    (acc, s) => ({ correct: acc.correct + s.correct, total: acc.total + s.total }),
    { correct: 0, total: 0 }
  );

  return (
    <div className="app">
      <header className="app-header">
        <span className="flag">🇪🇪</span>
        <h1>Estonian A2 Quiz</h1>
        <p>Noun declensions &amp; verb forms</p>
      </header>

      <main>
        {/* ── Start screen ── */}
        {view === 'start' && (
          <div className="start-screen">
            <div className="card">
              <h2>Ready to practice?</h2>
              <p className="start-desc">
                Choose your session. The verb section reviews <strong>-MA</strong> and{' '}
                <strong>-DA</strong> forms with sentence-completion questions.
              </p>

              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={includeVerbs}
                  onChange={(e) => setIncludeVerbs(e.target.checked)}
                />
                Include verb quiz (10 questions: <em>-MA</em> / <em>-DA</em>)
              </label>

              <label className="length-label">
                Declension questions
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

              <p className="start-total">
                Total questions: <strong>{(includeVerbs ? 10 : 0) + quizLength}</strong>
              </p>

              <button className="btn-primary" onClick={startQuiz}>
                Start Quiz
              </button>
            </div>
          </div>
        )}

        {/* ── Grammar rule card ── */}
        {view === 'grammar' && (
          <GrammarCard onContinue={() => setView('verbQuiz')} />
        )}

        {/* ── Verb quiz ── */}
        {view === 'verbQuiz' && (
          <VerbQuiz onComplete={handleVerbComplete} />
        )}

        {/* ── Declension quiz ── */}
        {view === 'quiz' && (
          <Quiz quizLength={quizLength} onComplete={handleDeclComplete} />
        )}

        {/* ── Results ── */}
        {view === 'results' && (
          <Results result={combined} scores={scores} onRestart={() => setView('start')} />
        )}
      </main>
    </div>
  );
}
