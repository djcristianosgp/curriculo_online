import Section from './Section';

function PortfolioGrid({ title, items, delay = 0, onPreview }) {
  return (
    <Section title={title} delay={delay}>
      <div className="card-grid">
        {items.map((item) => (
          <article className="project-card" key={item.titulo}>
            <h3 className="card-title">{item.titulo}</h3>
            <p className="card-copy">{item.descricao}</p>

            {(item.link_github || item.link_demo) && (
              <div className="action-links">
                {item.link_demo ? (
                  <button className="btn-link btn-link--button" onClick={() => onPreview?.(item)} type="button">
                    Prévia rápida
                  </button>
                ) : null}

                {item.link_github ? (
                  <a className="btn-link" href={item.link_github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                ) : null}

                {item.link_demo ? (
                  <a className="btn-link" href={item.link_demo} target="_blank" rel="noreferrer">
                    Visitar projeto
                  </a>
                ) : null}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

export default PortfolioGrid;
