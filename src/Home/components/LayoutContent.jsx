import { useSelector } from "react-redux";

function LayoutContent() {
  const dataUser = useSelector((state) => state.data);
  const { firstName, firstSurname, job } = dataUser;
  const name = firstName + " " + firstSurname;
  //   const { name, job } = user;

  return (
    <section className="content__page">
      <h1 className="page__name">{name}</h1>
      <h2 className="page__job">{job}</h2>
    </section>
  );
}

export default LayoutContent;
