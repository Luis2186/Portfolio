import { useEffect } from "react";
import Slide from "./Slide";

function Slides({ dataSlides }) {
  useEffect(() => {
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");

    next.addEventListener("click", function () {
      let items = document.querySelectorAll(".item");
      console.log(items);
      document.querySelector(".hobbies__slide").appendChild(items[0]);
    });
    prev.addEventListener("click", function () {
      let items = document.querySelectorAll(".item");
      document
        .querySelector(".hobbies__slide")
        .prepend(items[items.length - 1]);
    });
  }, []);
  console.log(dataSlides);
  const slidesCopy = [...dataSlides];

  return (
    <>
      <div className="hobbies__slide">
        {slidesCopy.map((slide) => (
          <Slide key={slide.id} urlImg={slide.urlImg} />
        ))}
      </div>
      <div className="button">
        <button className="prev" title="Previous">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" title="Next">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}

export default Slides;
