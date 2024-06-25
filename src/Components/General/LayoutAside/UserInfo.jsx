export const UserInfo = ({ name, job, img }) => {
  return (
    <div className="user-info__general">
      <div className="user-info__container-image">
        <img
          src={img}
          alt="Foto de perfil del usuario"
          className="user-info__image"
        />
      </div>

      <h2 className="user-info__name">{name}</h2>
      <h4 className="user-info__job">{job}</h4>
    </div>
  );
};
