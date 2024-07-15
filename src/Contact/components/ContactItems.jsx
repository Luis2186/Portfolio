import { ContactItem } from "./ContactItem";

export const ContactItems = ({ user }) => {
  return (
    <div className="contact__container">
      <section className="contact__info">
        <ContactItem
          description={user.state}
          iconClass={"contact__icon fa-solid fa-location-dot"}
        />
        <ContactItem
          description={user.phone}
          iconClass={"contact__icon fa-solid fa-phone"}
        />
        <ContactItem
          description={user.mail}
          iconClass={"contact__icon fa-solid fa-envelope"}
        />
        <ContactItem
          description={user.job}
          iconClass={"contact__icon fa-solid fa-circle-check"}
        />
      </section>
    </div>
  );
};
