import { useSelector } from "react-redux";
import { ContactItem } from "./ContactItem";

export const ContactItems = ({ user }) => {
  const dataUser = useSelector((state) => state.data);
  const { email, cellPhone, job, location } = dataUser;
  const locationUser = location[0];

  return (
    <div className="contact__container">
      <section className="contact__info">
        <ContactItem
          description={locationUser.state + ", " + locationUser.city}
          iconClass={"contact__icon fa-solid fa-location-dot"}
        />
        <ContactItem
          description={cellPhone}
          iconClass={"contact__icon fa-solid fa-phone"}
        />
        <ContactItem
          description={email}
          iconClass={"contact__icon fa-solid fa-envelope"}
        />
        <ContactItem
          description={job}
          iconClass={"contact__icon fa-solid fa-circle-check"}
        />
      </section>
    </div>
  );
};
