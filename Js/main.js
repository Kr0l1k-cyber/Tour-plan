$(document).ready(function () {
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
  let modalButton = $('[data-toggle=modal]');
  let closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal)
// находит дата атребутб запускает функцию

  function openModal () {
    let modalOverlay =$(".modal__overlay");
    let modalDialog =$(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
// добовляет класс открывает модальное окно

  function closeModal (event) {
    event.preventDefault();
    let modalOverlay =$(".modal__overlay");
    let modalDialog =$(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // удаляет класс закрывает модальное окно
  // ------------------------------------------------------------------------------------------
  $('.modal__form').validate({
    messages: {
      name: "Please specify your name",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      phone: {
        required: "Телефон обязателен",
      },
    }
  
  });
  // обработка формы
});