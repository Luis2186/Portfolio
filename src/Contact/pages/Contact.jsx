import { useEffect } from "react";
import { HeaderTitulo, HeaderSubtitle } from "../../General";
import { ContactItems, ContactMap, ContactForm } from "../components";

function Contact() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#load-iframe-map").innerHTML = `
          <iframe
          class="contact__iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.821220564501!2d-55.98516548824717!3d-34.83558726966836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f885485419a1d%3A0x514285a96c8ee4f3!2sAv.%20Giannattasio%2015%2C%2015000%20San%20Jose%20de%20Carrasco%2C%20Departamento%20de%20Canelones!5e0!3m2!1ses-419!2suy!4v1716054864138!5m2!1ses-419!2suy"
        >
        </iframe>
          `;
    }, 500);
  }, []);

  return (
    <section className="content__page content__contact">
      <HeaderTitulo title={"Contacto"} />
      <div className="contact__container">
        <ContactItems />

        <section className="contact__form-box">
          <ContactMap />

          <HeaderSubtitle
            subtitle={
              <>
                ¿Como puedo <span className="subtitle__color">ayudarte?</span>
              </>
            }
          />
          <ContactForm />
        </section>
      </div>
    </section>
  );
}

export default Contact;
