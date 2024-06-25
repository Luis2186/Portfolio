function LayoutContent({ user }) {
  const { name, job } = user;

  return (
    <main className="layout__content">
      <section className="content__page">
        <h1 className="page__name">{name}</h1>
        <h2 className="page__job">{job}</h2>
      </section>
    </main>
  );
}

export default LayoutContent;
