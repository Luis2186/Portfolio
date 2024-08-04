import { useSelector } from "react-redux";

export const UserInfo = ({ img }) => {
  const dataUser = useSelector((state) => state.data);
  const { firstName, firstSurname, job } = dataUser;

  return (
    <div className="user-info__general">
      <div className="user-info__container-image">
        <img
          src={img}
          alt="Foto de perfil del usuario"
          className="user-info__image"
        />
      </div>

      <h2 className="user-info__name">{firstName + " " + firstSurname}</h2>
      <h4 className="user-info__job">{job}</h4>
    </div>
  );
};
