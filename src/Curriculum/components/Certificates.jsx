import React from "react";
import Certificate from "./Certificate";

function Certificates({ certificates }) {
  return (
    <section className="certificates__container">
      {certificates.map((certificate) => (
        <Certificate
          key={certificate.id}
          title={certificate.title}
          id={certificate.id}
          date={certificate.date}
        />
      ))}
    </section>
  );
}

export default Certificates;
