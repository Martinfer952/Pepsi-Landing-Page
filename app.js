let navList = document.querySelector(".nav_list");
let sliderUno = document.querySelector(".sliderUno");
let sliderDos = document.querySelector(".sliderDos");
let sliderTres = document.querySelector(".sliderTres");
let flechaPrev = document.querySelector(".prev");
let flechaNext = document.querySelector(".next");
const slider = document.querySelectorAll(".slider");
let index = 0;

function mount() {
  slider[index].classList.add("active");
}

function unmount() {
  slider[index].classList.remove("active");
}

flechaNext.addEventListener("click", () => {
  unmount();
  if (index >= slider.length - 1) {
    index = 0;
  } else {
    index++;
  }
  mount();
});

flechaPrev.addEventListener("click", () => {
  unmount();
  if (index <= 0) {
    index = slider.length - 1;
  } else {
    index--;
  }
  mount();
});

mount();

const menuToggle = document.querySelector(".toggle");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navList.classList.toggle("show_menu");
});

document.onclick = function (clickEvent) {
  if (clickEvent.target.id != "nav_list" && clickEvent.target.id != "toggle") {
    menuToggle.classList.remove("active");
    navList.classList.remove("show_menu");
  }
};
