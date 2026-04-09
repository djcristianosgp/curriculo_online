import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import PortfolioGrid from './components/PortfolioGrid';
import ExperienceList from './components/ExperienceList';
import ProjectPreviewModal from './components/ProjectPreviewModal';
import portfolioData from './data/portfolioData';

function App() {
  const [previewItem, setPreviewItem] = useState(null);
  const { conhecimentos, cursos_extras: cursosExtras, experiencias_profissionais: experiencias, formacao, projetos, prototipos, sobre } = portfolioData;

  useEffect(() => {
    if (!previewItem) {
      document.body.style.removeProperty('overflow');
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPreviewItem(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.removeProperty('overflow');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewItem]);

  return (
    <>
      <main className="page-shell">
        <div className="portfolio-shell container-bg">
        <Hero data={portfolioData} />

        {sobre ? (
          <Section title="Sobre Mim" delay={80}>
            <p className="body-copy">{sobre}</p>
          </Section>
        ) : null}

        {conhecimentos.length ? (
          <Section title="Conhecimentos" delay={140}>
            <div className="tag-list">
              {conhecimentos.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </Section>
        ) : null}

        {projetos.length ? <PortfolioGrid title="Projetos Pessoais" items={projetos} delay={200} onPreview={setPreviewItem} /> : null}
        {prototipos.length ? <PortfolioGrid title="Protótipos" items={prototipos} delay={260} onPreview={setPreviewItem} /> : null}

        {formacao.length ? (
          <Section title="Formação Acadêmica" delay={320}>
            <div className="stack-list">
              {formacao.map((item) => (
                <article className="project-card" key={`${item.titulo}-${item.instituicao}`}>
                  <h3 className="card-title card-title--small">{item.titulo}</h3>
                  <p className="meta-copy">
                    {item.instituicao} | {item.periodo}
                  </p>
                  {item.status ? <span className="skill-tag skill-tag--small">{item.status}</span> : null}
                </article>
              ))}
            </div>
          </Section>
        ) : null}

        {cursosExtras.length ? (
          <Section title="Cursos Extras" delay={380}>
            <ul className="bullet-list">
              {cursosExtras.map((curso) => (
                <li key={curso}>{curso}</li>
              ))}
            </ul>
          </Section>
        ) : null}

        {experiencias.length ? <ExperienceList items={experiencias} delay={440} /> : null}
        </div>
      </main>

      <ProjectPreviewModal item={previewItem} onClose={() => setPreviewItem(null)} />
    </>
  );
}

export default App;
