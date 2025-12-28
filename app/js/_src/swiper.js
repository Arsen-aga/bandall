new Swiper(".dream-interiors__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  initialSlide: 1,
  centeredSlides: true,
  mousewheel: {
    enabled: true,
    eventsTarget: ".dream-interiors__swiper", // или 'container'
    forceToAxis: true, // только горизонтальная прокрутка
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    // Добавляем обработчик drag для скроллбара
    dragClass: "swiper-scrollbar-drag",
    hide: false,
    snapOnRelease: true,
  },
  // Включаем навигацию для тачпада
  touchEventsTarget: "container",
});
new Swiper(".fixed-cost__swiper", {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 20,
  mousewheel: {
    enabled: true,
    eventsTarget: ".fixed-cost__swiper", // или 'container'
    forceToAxis: true, // только горизонтальная прокрутка
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    // Добавляем обработчик drag для скроллбара
    dragClass: "swiper-scrollbar-drag",
    hide: false,
    snapOnRelease: true,
  },
  touchEventsTarget: "container",
  breakpoints: {
    991.8: {
      initialSlide: 1,
    },
  },
});
new Swiper(".video-review__swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 18,
  initialSlide: 2,
  centeredSlides: true,
  mousewheel: {
    enabled: true,
    eventsTarget: ".video-review__swiper", // или 'container'
    forceToAxis: true, // только горизонтальная прокрутка
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    // Добавляем обработчик drag для скроллбара
    dragClass: "swiper-scrollbar-drag",
    hide: false,
    snapOnRelease: true,
  },
  on: {
    slideChange: function (swiper) {
      swiper.slides.forEach((slide) => {
        const overlay = slide.querySelector(".overlay");
        overlay.style.display = "block";
      });
      const activeSlideIndex = swiper.activeIndex;
      const activeSlide = swiper.slides[activeSlideIndex];
      const overlay = activeSlide.querySelector(".overlay");
      overlay.style.display = "none";
    },
  },

  touchEventsTarget: "container",
});
new Swiper(".interior__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".interior__next",
    prevEl: ".interior__prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    enabled: true,
    eventsTarget: ".interior__swiper", // или 'container'
    forceToAxis: true, // только горизонтальная прокрутка
  },
  // Включаем навигацию для тачпада
  touchEventsTarget: "container",
});

new Swiper(".package-documentation__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  mousewheel: {
    enabled: true,
    eventsTarget: ".package-documentation__swiper", // или 'container'
    forceToAxis: true, // только горизонтальная прокрутка
  },
  // Включаем навигацию для тачпада
  touchEventsTarget: "container",
});
new Swiper(".fixing__swiper", {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".fixing__next",
    prevEl: ".fixing__prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    enabled: true,
    eventsTarget: ".fixing__swiper", // или 'container'
    forceToAxis: true, // только горизонтальная прокрутка
  },
  // Включаем навигацию для тачпада
  touchEventsTarget: "container",
  breakpoints: {
    991.8: {
      spaceBetween: 20,
      slidesPerView: "auto",
    },
    575.98: {
      slidesPerView: 15,
      slidesPerView: "auto",
    },
  },
});
new Swiper(".team__swiper", {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 15,
  initialSlide: 2,
  centeredSlides: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    // Добавляем обработчик drag для скроллбара
    dragClass: "swiper-scrollbar-drag",
    hide: false,
    snapOnRelease: true,
  },
  mousewheel: {
    enabled: true,
    eventsTarget: ".team__swiper", // или 'container'
    forceToAxis: true, // только горизонтальная прокрутка
  },
  // Включаем навигацию для тачпада
  touchEventsTarget: "container",
  breakpoints: {
    991.8: {
      spaceBetween: 20,
      slidesPerView: "auto",
    },
  },
});
