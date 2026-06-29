// GrammarCard — shown before the verb quiz to review MA vs DA rules

export default function GrammarCard({ onContinue }) {
  return (
    <div className="grammar-wrap">
      <div className="card">
        <div className="grammar-header">
          <div className="grammar-icon">📖</div>
          <h2>Grammar Review</h2>
          <p className="grammar-subtitle">
            Before the verb quiz, a quick recap of <strong>-MA</strong> vs <strong>-DA</strong>.
          </p>
        </div>

        {/* MA rule */}
        <div className="grammar-rule grammar-ma">
          <h3>-MA vorm</h3>
          <p className="rule-desc">
            Used after <strong>movement & process verbs</strong> — going/coming somewhere
            to do something, starting an activity, or expressing obligation.
          </p>
          <div className="trigger-chips">
            {['lähen', 'hakkan', 'tulen', 'pean'].map((t) => (
              <span key={t} className="chip chip-ma">{t}</span>
            ))}
          </div>
          <div className="grammar-examples">
            <p>Ma <em>lähen</em> jooks<strong>ima</strong></p>
            <p>Ma <em>hakkan</em> õppi<strong>ma</strong></p>
            <p>Ma <em>pean</em> tege<strong>ma</strong></p>
          </div>
        </div>

        {/* DA rule */}
        <div className="grammar-rule grammar-da">
          <h3>-DA vorm</h3>
          <p className="rule-desc">
            Used after <strong>modal & desire verbs</strong> — expressing want, ability,
            preference, or need.
          </p>
          <div className="trigger-chips">
            {['tahan', 'saan', 'meeldib', 'oskan', 'proovin', 'mul on vaja'].map((t) => (
              <span key={t} className="chip chip-da">{t}</span>
            ))}
          </div>
          <div className="grammar-examples">
            <p>Ma <em>tahan</em> reis<strong>ida</strong></p>
            <p>Mulle <em>meeldib</em> joonista<strong>da</strong></p>
            <p>Ma <em>oskan</em> süüa teh<strong>a</strong></p>
          </div>
        </div>

        <button className="btn-primary" onClick={onContinue}>
          Got it — start verb quiz (10 questions) →
        </button>
      </div>
    </div>
  );
}
