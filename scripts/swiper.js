const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2500, 
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  // },
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 4
      
    },
    992: {
      slidesPerView: 5
      
    },
    1200: {
      slidesPerView: 5
    }
  }
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000, 
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    768: {
      slidesPerView: 1
      
    },
    992: {
      slidesPerView: 3
      
    },
    1200: {
      slidesPerView: 3
    }
  }
});

const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000, 
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 5
});



