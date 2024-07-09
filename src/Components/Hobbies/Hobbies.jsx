import LayoutAside from "../General/LayoutAside/LayoutAside";
import HeaderTitulo from "../General/HeaderTitulo";
import Slides from "./Slides";
import IconosCategories from "./IconosCategories";
import { useEffect, useState } from "react";
import { dataSlides } from "../../Data/dataSlides";
import SliderApp from "./SliderApp";

export default function Hobbies({ user, layoutVisible }) {
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
      <LayoutAside user={user} layoutVisible={layoutVisible} />
      <main className="layout__content">
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
          {/* <Slides dataSlides={photoCategorie} /> */}
        </section>
      </main>
    </>
  );
}

// <div
// className="item"
// style={{
//   backgroundImage:
//     "url(https://images.unsplash.com/photo-1610809376778-928ee2c3a561?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// }}
// >
// {/* <div className="content">
// <div className="name">BMW M4</div>
// <div className="desc">
//   The 2024 BMW M4 Coupe delivers signature pulse-pounding BMW M
//   performance and aesthetics to match.
// </div>
// <button>More Info </button>
// </div> */}
// </div>
// <div
// className="item"
// style={{
//   backgroundImage:
//     "url(https://images.unsplash.com/photo-1625179904634-243c6cdd6421?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
// }}
// >
// {/* <div className="content">
// <div className="name">Porsche 911</div>
// <div className="desc">
//   Engineered around Porsche’s iconic 911 engine with unique hybrid
//   technologies and delivering unsurpassed Porsche and hybrid
//   performance,
// </div>
// <button>More Info</button>
// </div> */}
// </div>
// <div
// className="item"
// style={{
//   backgroundImage:
//     "url(https://images.unsplash.com/photo-1597935370784-051cdebbe6a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
// }}
// >
// {/* <div className="content">
// <div className="name">Ferrari 488 Pista</div>
// <div className="desc">
//   The Ferrari 488 Pista is powered by the most powerful V8 engine
//   in the Maranello marque’s history and is the company’s special
//   series sports car
// </div>
// <button>More Info</button>
// </div> */}
// </div>
// <div
// className="item"
// style={{
//   backgroundImage:
//     "url(https://images.unsplash.com/photo-1453491945771-a1e904948959?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
// }}
// >
// {/* <div className="content">
// <div className="name">Tesla Model S</div>
// <div className="desc">
//   Model S platforms unite powertrain and battery technologies for
//   unrivaled performance, range and efficiency.
// </div>
// <button>More Info</button>
// </div> */}
// </div>
// <div
// className="item"
// style={{
//   backgroundImage:
//     "url(https://images2.alphacoders.com/724/724677.jpg)",
//   backgroundPosition: "center",
// }}
// >
// {/* <div className="content">
// <div className="name">Mercedes-Benz C-className Cabriolet</div>
// <div className="desc">
//   The C-className Cabriolet shows an ever-fresh face to the sun.
//   Four of you can take in the sky. Ride in coupelike comfort under
//   a rich fabric top
// </div>
// <button>More Info</button>
// </div> */}
// </div>
// <div
// className="item"
// style={{
//   backgroundImage:
//     "url(https://images.pexels.com/photos/1280553/pexels-photo-1280553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
//   backgroundPosition: "bottom",
// }}
// >
// {/* <div className="content">
// <div className="name">Chevrolet Bel Air</div>
// <div className="desc">
//   Chevrolet Bel Air Sport Coupé 6.7 V8 Manual, 385hp, 1962 ·
//   Back/Side of Chevrolet Bel Air Sport Coupé 6.7 V8 Manual, 385hp
// </div>
// <button>More Info</button>
// </div> */}
// </div>
