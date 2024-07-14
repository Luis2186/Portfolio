function LayoutContent({ user }) {
  const { name, job } = user;

  return (
    <section className="content__page">
      <h1 className="page__name">{name}</h1>
      <h2 className="page__job">{job}</h2>
    </section>
  );
}

export default LayoutContent;
