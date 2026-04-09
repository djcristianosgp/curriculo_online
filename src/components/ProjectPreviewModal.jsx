function ProjectPreviewModal({ item, onClose }) {
  if (!item) {
    return null;
  }

  return (
    <div aria-hidden="true" className="modal-overlay" onClick={onClose}>
      <div
        aria-labelledby="project-preview-title"
        aria-modal="true"
        className="modal-shell"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="modal-header">
          <div>
            <p className="modal-kicker">Pré-visualização rápida</p>
            <h2 className="modal-title" id="project-preview-title">
              {item.titulo}
            </h2>
          </div>

          <button aria-label="Fechar pré-visualização" className="modal-close" onClick={onClose} type="button">
            ×
          </button>
        </div>

        <p className="modal-description">{item.descricao}</p>

        <div className="modal-frame-wrap">
          <iframe
            className="modal-frame"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={item.link_demo}
            title={`Pré-visualização do projeto ${item.titulo}`}
          />
        </div>

        <div className="modal-footer">
          <p className="modal-note">Se o site bloquear incorporação no navegador, use o botão de nova guia para explorar o projeto completo.</p>

          <div className="modal-actions">
            <a className="btn-link" href={item.link_demo} rel="noreferrer" target="_blank">
              Abrir em nova guia
            </a>

            {item.link_github ? (
              <a className="btn-link btn-link--muted" href={item.link_github} rel="noreferrer" target="_blank">
                Ver código no GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreviewModal;