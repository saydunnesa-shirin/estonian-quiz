// Home — topic selector shown at app start
export default function Home({ onSelectTopic }) {
  const topics = [
    {
      id: 'verb',
      icon: '🔤',
      title: 'Verb Forms',
      subtitle: '-MA and -DA infinitives',
      detail: '10 sentence-completion questions',
      color: 'blue',
    },
    {
      id: 'pronoun',
      icon: '👤',
      title: 'Pronouns',
      subtitle: 'kellel · kellele · kellelt · keda',
      detail: 'Personal pronoun case forms',
      color: 'green',
    },
    {
      id: 'vocab',
      icon: '📚',
      title: 'Vocabulary',
      subtitle: 'Noun declension forms',
      detail: '6 forms: singular & plural',
      color: 'purple',
    },
  ];

  return (
    <div className="home">
      <p className="home-subtitle">Choose a topic to practice:</p>

      <div className="topic-list">
        {topics.map((t) => (
          <button
            key={t.id}
            className={`topic-card topic-${t.color}`}
            onClick={() => onSelectTopic(t.id)}
          >
            <span className="topic-icon">{t.icon}</span>
            <div className="topic-info">
              <h3>{t.title}</h3>
              <p>{t.subtitle}</p>
              <small>{t.detail}</small>
            </div>
            <span className="topic-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
