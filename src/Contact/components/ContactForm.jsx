export const ContactForm = () => {
  return (
    <form action="" className="contact__form">
      <div className="form__container">
        <section className="form__left">
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              name="name"
              required
              placeholder="Nombre"
            />
            <label htmlFor="name" className="form__label">
              Nombre
            </label>
          </div>
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              name="email"
              required
              placeholder="Email"
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              name="subject"
              required
              placeholder="Asunto"
            />
            <label htmlFor="subject" className="form__label">
              Asunto
            </label>
          </div>
        </section>

        <section className="form__right">
          <div className="form__group form__group--textarea">
            <textarea
              className="form__input form__input--textarea"
              name="message"
              required
              placeholder="Mensaje"
            ></textarea>
            <label htmlFor="message" className="form__label">
              Mensaje
            </label>
          </div>
        </section>
      </div>

      <input
        type="submit"
        className="form__button"
        value="Enviar mensaje"
        id=""
      />
    </form>
  );
};
