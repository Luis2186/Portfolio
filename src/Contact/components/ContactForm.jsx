import React, { useState } from "react";
import emailjs from "emailjs-com";

const serviceId = "service_8vv0ubl";
const templateId = "template_9v8p3dp";
const userKey = "DPfew0PvvuApuWN9v";
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(serviceId, templateId, formData, userKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        // Aquí puedes mostrar un mensaje de éxito al usuario
      },
      (err) => {
        console.log("FAILED...", err);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    );

    // Opcional: Limpiar el formulario
    setFormData({ name: "", subject: "", message: "" });
  };

  return (
    <form action="" className="contact__form" onSubmit={handleSubmit}>
      <div className="form__container">
        <section className="form__left">
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.subject}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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
