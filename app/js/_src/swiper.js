const swiper = new Swiper(".solution__inner", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 12,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    540: {
      slidesPerView: 3,
    },
    750: {
      slidesPerView: 4,
    },
  },
  on: {
    init: function () {
      updateHighlight(this);
    },
    resize: function () {
      updateHighlight(this);
    },
    slideChangeTransitionStart: function () {
      let lastTimestamp = null;
      const updateDuringTransition = (timestamp) => {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const progress = timestamp - lastTimestamp;

        updateHighlight(this);

        if (progress < 300) {
          requestAnimationFrame(updateDuringTransition);
        }
      };
      requestAnimationFrame(updateDuringTransition);
    },
    slideChangeTransitionEnd: function () {
      updateHighlight(this);
    },
  },
});

function updateHighlight(swiper) {
  const slides = swiper.slides;
  const windowCenter = window.innerWidth / 2;

  // Убираем highlight у всех слайдов
  slides.forEach((slide) => slide.classList.remove("blur"));

  // Находим центральный слайд
  let centralSlideIndex = -1;
  slides.forEach((slide, index) => {
    const rect = slide.getBoundingClientRect();
    const slideCenter = rect.left + rect.width / 2;

    if (Math.abs(slideCenter - windowCenter) < 50) {
      centralSlideIndex = index;
    }
  });

  // Если центральный слайд найден, определяем предыдущий и следующий
  if (centralSlideIndex !== -1) {
    const totalSlides = slides.length;
    const prevIndex = (centralSlideIndex - 1 + totalSlides) % totalSlides;
    const nextIndex = (centralSlideIndex + 1) % totalSlides;

    // Убираем highlight у центрального, предыдущего и следующего слайдов
    slides.forEach((slide, index) => {
      const realIdx = index % totalSlides;
      if (
        realIdx === centralSlideIndex ||
        realIdx === prevIndex ||
        realIdx === nextIndex
      ) {
        slide.classList.remove("blur");
      } else {
        slide.classList.add("blur");
      }
    });
  }
}



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
