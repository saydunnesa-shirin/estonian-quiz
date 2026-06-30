import { useState } from 'react';

const STORAGE_KEY = 'estonian-quiz-history';

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveResult(result, scores) {
  const history = getHistory();
  history.unshift({ ...result, scores, date: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 30)));
}

function pct(correct, total) {
  if (!total) return 0;
  return Math.round((correct / total) * 100);
}

function emoji(p) {
  if (p >= 90) return '🏆';
  if (p >= 70) return '👍';
  if (p >= 50) return '💪';
  return '📚';
}

export default function Results({ result, scores = [], topicLabel, onRestart }) {
  const [history] = useState(() => {
    saveResult({ ...result, topic: topicLabel }, scores);
    return getHistory();
  });

  const p     = pct(result.correct, result.total);
  const wrong = result.total - result.correct;

  return (
    <div className="results">
      {/* ── Hero score ── */}
      <div className="result-hero">
        <div className="result-emoji">{emoji(p)}</div>
        {topicLabel && <p className="result-topic">{topicLabel}</p>}
        <div className="result-score">{result.correct} / {result.total}</div>
        <div className="result-pct">{p}%</div>
        <p className="result-sub">{result.correct} correct · {wrong} wrong</p>
      </div>

      {/* ── Breakdown by section (only when > 1 section) ── */}
      {scores.length > 1 && (
        <div className="breakdown">
          <h3>Breakdown</h3>
          {scores.map((s, i) => {
            const sp = pct(s.correct, s.total);
            return (
              <div key={i} className="breakdown-row">
                <span className="breakdown-label">{s.label}</span>
                <span className="breakdown-score">{s.correct}/{s.total}</span>
                <span className={sp >= 70 ? 'pct-good' : 'pct-low'}>{sp}%</span>
              </div>
            );
          })}
        </div>
      )}

      <button className="btn-primary" onClick={onRestart}>
        ← Back to Topics
      </button>

      {/* ── History ── */}
      {history.length > 0 && (
        <div className="history">
          <h3>Your History</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Topic</th>
                <th>Score</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, i) => {
                const p2 = pct(h.correct, h.total);
                return (
                  <tr key={i} className={i === 0 ? 'row-latest' : ''}>
                    <td>
                      {new Date(h.date).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="history-topic">{h.topic || '—'}</td>
                    <td>{h.correct} / {h.total}</td>
                    <td className={p2 >= 70 ? 'pct-good' : 'pct-low'}>{p2}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
