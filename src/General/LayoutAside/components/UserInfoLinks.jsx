import SocialLink from "./SocialLink";

function UserInfoLinks() {
  return (
    <div className="user-info__links">
      <ul className="links__social">
        <SocialLink
          href={"#"}
          socialIconClass={"fa-brands fa-youtube social__icon"}
        />
        <SocialLink
          href={"#"}
          socialIconClass={"fa-brands fa-linkedin social__icon"}
        />
        <SocialLink
          href={"#"}
          socialIconClass={"fa-brands fa-instagram social__icon"}
        />
      </ul>
    </div>
  );
}

export default UserInfoLinks;
