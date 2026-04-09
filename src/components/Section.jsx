function Section({ title, children, delay = 0 }) {
  return (
    <section className="reveal section-spacing" style={{ animationDelay: `${delay}ms` }}>
      <div className="panel">
        <h2 className="section-header">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Section;
