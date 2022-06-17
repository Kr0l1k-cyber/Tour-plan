var swiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});
//карты яндекса
function init(){
  var map = new ymaps.Map('map', {
  center: [36.13990039624475,-115.16105149619955],
  zoom: [10], 
  });
};
ymaps.ready(init);
