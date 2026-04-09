import Section from './Section';

function ExperienceList({ items, delay = 0 }) {
  return (
    <Section title="Experiências Profissionais" delay={delay}>
      <div className="stack-list">
        {items.map((item) => (
          <article className="project-card" key={`${item.cargo}-${item.empresa}-${item.periodo}`}>
            <h3 className="card-title">{item.cargo}</h3>
            <p className="meta-copy">
              {item.empresa} | {item.periodo} ({item.duracao})
            </p>
            <p className="meta-copy meta-copy--spaced">{item.local}</p>
            {item.descricao ? <p className="body-copy">{item.descricao}</p> : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

export default ExperienceList;
