window.addEventListener("load", () => {
  const slider = document.querySelector(".staff");
  const firstImg = slider.querySelector(".first");

  slider.scrollLeft = firstImg.offsetWidth / 0;
});