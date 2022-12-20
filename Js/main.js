var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
});
//карты яндекса
function init() {
  var map = new ymaps.Map("map", {
    center: [36.13990039624475, -115.16105149619955],
    zoom: [10],
  });
}
ymaps.ready(init);
// Слайдер с отзывами
var reviewsSlider = new Swiper(".reviews-slider", {
  centeredSlides: true,
  slidesPerView: 0.5,
  // 2 пункта выше добавил что бы скрыть лишние слайды при адаптиве 768px
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
// всплывающее меню 756px<
