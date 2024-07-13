document.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("resize", () => {
    let size = parseInt(document.body.clientWidth);

    if (size <= 1060) {
      aside.classList.remove("layout__aside--visible");
      icon_bars.style.opacity = 1;
      icon_xmark.style.opacity = 0;
    }
  });
});
