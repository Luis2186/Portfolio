import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function SliderApp({ dataSlides, category }) {
  const onCategory = (category) => {
    if (category === "trips") return "viajes";
    if (category === "cars") return "autos";
    if (category === "animals") return "animales";
  };

  return (
    <div className="container__slider">
      <h1 className="heading"> Galeria de {onCategory(category)}</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {dataSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img className="swiper_img" src={slide.urlImg} alt="slide_image" />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <i className="fa-solid fa-arrow-left fa-xl "></i>
          </div>
          <div className="swiper-button-next slider-arrow">
            <i className="fa-solid fa-arrow-right fa-xl "></i>
          </div>
          <div className="container__swiper-pagination">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default SliderApp;
