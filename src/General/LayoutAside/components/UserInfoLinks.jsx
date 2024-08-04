import { useSelector } from "react-redux";
import SocialLink from "./SocialLink";

function UserInfoLinks() {
  const dataUser = useSelector((state) => state.data);
  const { digitalPlataforms } = dataUser;

  return (
    <div className="user-info__links">
      <ul className="links__social">
        {digitalPlataforms.map((dp) => (
          <SocialLink
            key={dp.id}
            href={dp.url}
            socialIconClass={dp.iconClassName}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserInfoLinks;
