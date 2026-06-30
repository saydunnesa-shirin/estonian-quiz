// PronounGrammarCard — grammar review shown before the pronoun quiz

const TABLE = [
  { nom: 'mina / ma',  gen: 'minu / mu', dat: 'mulle',  ade: 'mul',  abl: 'minult', par: 'mind' },
  { nom: 'sina / sa',  gen: 'sinu / su', dat: 'sulle',  ade: 'sul',  abl: 'sinult', par: 'sind' },
  { nom: 'tema / ta',  gen: 'tema / ta', dat: 'talle',  ade: 'tal',  abl: 'temalt', par: 'teda' },
  { nom: 'meie / me',  gen: 'meie / me', dat: 'meile',  ade: 'meil', abl: 'meilt',  par: 'meid' },
  { nom: 'teie / te',  gen: 'teie / te', dat: 'teile',  ade: 'teil', abl: 'teilt',  par: 'teid' },
  { nom: 'nemad / nad',gen: 'nende',     dat: 'neile',  ade: 'neil', abl: 'neilt',  par: 'neid' },
];

const RULES = [
  {
    q: 'Kellele?',
    color: 'pro-blue',
    label: 'allative (dative)',
    verbs: 'meeldima, helistama, andma, rääkima, kirjutama',
    example: 'Mulle meeldib muusika. Talle helistatakse.',
  },
  {
    q: 'Kellel?',
    color: 'pro-green',
    label: 'adessive',
    verbs: 'on (possession & states)',
    example: 'Mul on auto. Tal on igav. Teil on aega.',
  },
  {
    q: 'Kellelt?',
    color: 'pro-orange',
    label: 'ablative',
    verbs: 'küsima, laenama, saama, ostma, paluma',
    example: 'Sinult saab küsida. Sain neilt vastuse.',
  },
  {
    q: 'Keda?',
    color: 'pro-purple',
    label: 'partitive',
    verbs: 'armastama, nägema, ootama, segama, kuulama',
    example: 'Ma armastan sind. Oodake mind!',
  },
];

export default function PronounGrammarCard({ onContinue, quizLength }) {
  return (
    <div className="grammar-wrap">
      <div className="card">
        <div className="grammar-header">
          <div className="grammar-icon">👤</div>
          <h2>Pronoun Cases</h2>
          <p className="grammar-subtitle">
            Quick review before the quiz — which case goes with which verb?
          </p>
        </div>

        {/* Declension table */}
        <div className="pro-table-wrap">
          <table className="pro-table">
            <thead>
              <tr>
                <th>Kes?</th>
                <th>Kelle?</th>
                <th className="col-blue">Kellele?</th>
                <th className="col-green">Kellel?</th>
                <th className="col-orange">Kellelt?</th>
                <th className="col-purple">Keda?</th>
              </tr>
            </thead>
            <tbody>
              {TABLE.map((row) => (
                <tr key={row.nom}>
                  <td className="nom-cell">{row.nom}</td>
                  <td>{row.gen}</td>
                  <td className="col-blue">{row.dat}</td>
                  <td className="col-green">{row.ade}</td>
                  <td className="col-orange">{row.abl}</td>
                  <td className="col-purple">{row.par}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Case usage rules */}
        <div className="pro-rules">
          {RULES.map((r) => (
            <div key={r.q} className={`pro-rule ${r.color}`}>
              <div className="pro-rule-header">
                <strong>{r.q}</strong>
                <span className="pro-rule-label">{r.label}</span>
              </div>
              <p className="pro-rule-verbs">{r.verbs}</p>
              <p className="pro-rule-example"><em>{r.example}</em></p>
            </div>
          ))}
        </div>

        <button className="btn-primary" onClick={onContinue}>
          Got it — start quiz ({quizLength} questions) →
        </button>
      </div>
    </div>
  );
}
