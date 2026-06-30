import { useState } from 'react';
import Home               from './components/Home';
import GrammarCard        from './components/GrammarCard';
import VerbQuiz           from './components/VerbQuiz';
import Quiz               from './components/Quiz';
import PronounGrammarCard from './components/PronounGrammarCard';
import PronounQuiz        from './components/PronounQuiz';
import Results            from './components/Results';

// Screens:
//   home → verbConfig → verbGrammar → verbQuiz
//        → pronounConfig → pronounGrammar → pronounQuiz
//        → vocabConfig → vocabQuiz
//   any quiz → results → home

export default function App() {
  const [screen, setScreen]         = useState('home');
  const [topic, setTopic]           = useState(null);
  const [quizLength, setQuizLength] = useState(10);
  const [scores, setScores]         = useState([]);

  function selectTopic(t) {
    setTopic(t);
    setScores([]);
    setQuizLength(10); // reset to sensible default
    setScreen(t + 'Config');
  }

  function finishQuiz(label, result) {
    setScores([{ label, ...result }]);
    setScreen('results');
  }

  const TOPIC_LABEL = {
    verb:    'Verb Forms (-MA / -DA)',
    pronoun: 'Pronouns (kellele · kellel · kellelt · keda)',
    vocab:   'Vocabulary (Declension)',
  };

  // Combined score for Results (only one section per topic, but keep structure)
  const combined = scores.reduce(
    (acc, s) => ({ correct: acc.correct + s.correct, total: acc.total + s.total }),
    { correct: 0, total: 0 }
  );

  return (
    <div className="app">
      <header className="app-header">
        <span className="flag">🇪🇪</span>
        <h1>Estonian A2 Quiz</h1>
        {screen !== 'home' && (
          <button className="btn-back" onClick={() => setScreen('home')}>
            ← Back to Topics
          </button>
        )}
      </header>

      <main>

        {/* ── HOME ──────────────────────────────────────────────────────────── */}
        {screen === 'home' && (
          <Home onSelectTopic={selectTopic} />
        )}

        {/* ── VERB TOPIC ────────────────────────────────────────────────────── */}
        {screen === 'verbConfig' && (
          <div className="start-screen">
            <div className="card">
              <h2>🔤 Verb Forms</h2>
              <p className="start-desc">
                10 sentence-completion questions on <strong>-MA</strong> and{' '}
                <strong>-DA</strong> infinitives. A grammar review card appears first.
              </p>
              <button className="btn-primary" onClick={() => setScreen('verbGrammar')}>
                Start →
              </button>
            </div>
          </div>
        )}

        {screen === 'verbGrammar' && (
          <GrammarCard onContinue={() => setScreen('verbQuiz')} />
        )}

        {screen === 'verbQuiz' && (
          <VerbQuiz
            onComplete={(r) => finishQuiz('Verb Forms', r)}
          />
        )}

        {/* ── PRONOUN TOPIC ─────────────────────────────────────────────────── */}
        {screen === 'pronounConfig' && (
          <div className="start-screen">
            <div className="card">
              <h2>👤 Pronouns</h2>
              <p className="start-desc">
                Fill-in-the-blank sentences using Estonian personal pronoun case forms.
                A grammar table will appear first.
              </p>
              <label className="length-label">
                Number of questions
                <select
                  value={quizLength}
                  onChange={(e) => setQuizLength(Number(e.target.value))}
                  className="length-select"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
              </label>
              <button className="btn-primary" onClick={() => setScreen('pronounGrammar')}>
                Start →
              </button>
            </div>
          </div>
        )}

        {screen === 'pronounGrammar' && (
          <PronounGrammarCard
            quizLength={quizLength}
            onContinue={() => setScreen('pronounQuiz')}
          />
        )}

        {screen === 'pronounQuiz' && (
          <PronounQuiz
            quizLength={quizLength}
            onComplete={(r) => finishQuiz('Pronouns', r)}
          />
        )}

        {/* ── VOCAB TOPIC ───────────────────────────────────────────────────── */}
        {screen === 'vocabConfig' && (
          <div className="start-screen">
            <div className="card">
              <h2>📚 Vocabulary</h2>
              <p className="start-desc">
                Noun declension questions: choose the correct case form for a given word.
                Difficulty increases as you progress through the session.
              </p>
              <label className="length-label">
                Number of questions
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
              <button className="btn-primary" onClick={() => setScreen('vocabQuiz')}>
                Start →
              </button>
            </div>
          </div>
        )}

        {screen === 'vocabQuiz' && (
          <Quiz
            quizLength={quizLength}
            onComplete={(r) => finishQuiz('Vocabulary', r)}
          />
        )}

        {/* ── RESULTS ───────────────────────────────────────────────────────── */}
        {screen === 'results' && (
          <Results
            result={combined}
            scores={scores}
            topicLabel={topic ? TOPIC_LABEL[topic] : undefined}
            onRestart={() => setScreen('home')}
          />
        )}

      </main>
    </div>
  );
}
