import { HeaderTitulo } from "../../General";
import IconosCategories from "../components/IconosCategories";
import { useEffect, useState } from "react";
import { dataSlides } from "../data/dataSlides";
import SliderApp from "../components/SliderApp";

export default function Hobbies() {
  const [categoriePhoto, setCategoriePhoto] = useState("trips");
  const [photoCategorie, setPhotoCategorie] = useState([]);

  useEffect(() => {
    const photosForCategory = [...dataSlides].filter(
      (photo) => photo.category == categoriePhoto
    );
    setPhotoCategorie(photosForCategory);
  }, [categoriePhoto]);

  return (
    <>
      <section className="content__page content__hobbies">
        <HeaderTitulo title={"Fotografia"} />
        <article className="hobbies__hobbie">
          <div className="hobbie__content">
            <p className="hobbie__description">
              {
                "La fotografía es una de mis pasiones. Disfruto capturando momentos y explorando diferentes técnicas para expresar mi creatividad. Este hobby me permite desconectar y encontrar inspiración, aplicando la atención al detalle y la composición tanto en mis fotos como en mi trabajo de desarrollo de software."
              }
            </p>
          </div>
        </article>

        <IconosCategories setcategoriePhoto={setCategoriePhoto} />

        <SliderApp dataSlides={photoCategorie} category={categoriePhoto} />
      </section>
    </>
  );
}
