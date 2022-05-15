const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".slider");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let direction = "";

prev.addEventListener("click", function () {
  slider.style.transform = "translateX(-20%)";
  slider.style.transition = "";
  slider.prepend(slider.lastElementChild);
  setTimeout(() => {
    slider.style.transform = "translateX(0%)";
    slider.style.transition = "transform 0.5s ease";
  });
  direction = prev.className;
});

next.addEventListener("click", function () {
  slider.style.transform = "translateX(-20%)";
  slider.style.transition = "transform 0.5s ease";
  direction = next.className;
});

slider.addEventListener("transitionend", function () {
  if (direction == "next") {
    slider.appendChild(slider.firstElementChild);
    slider.style.transform = "translateX(0)";
    slider.style.transition = "";
  }
});
