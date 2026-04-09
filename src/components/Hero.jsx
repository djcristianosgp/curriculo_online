function Hero({ data }) {
  const phoneHref = `tel:${data.contatos.telefone.replace(/\D/g, '')}`;

  return (
    <header className="reveal hero">
      <img className="avatar" src="/photoperfil.jpg" alt="Foto de perfil de Cristiano Grobério" />
      <h1 className="page-title">{data.nome}</h1>
      <p className="page-highlight">{data.cargo}</p>

      <div className="social-links">
        <a className="social-link" href={phoneHref}>
          {data.contatos.telefone}
        </a>
        <a className="social-link" href={`mailto:${data.contatos.email}`}>
          {data.contatos.email}
        </a>
        <a className="social-link" href={data.contatos.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="social-link" href={data.contatos.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <p className="subtitle">{data.localizacao}</p>
    </header>
  );
}

export default Hero;
