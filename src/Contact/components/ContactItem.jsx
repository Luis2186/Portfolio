export const ContactItem = ({ description, iconClass }) => {
  return (
    <div className="contact__data">
      <i className={iconClass}></i>
      <h2 className="contact__subtitle">{description}</h2>
    </div>
  );
};
