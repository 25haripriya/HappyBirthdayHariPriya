const swipers = document.querySelectorAll('.mySwiper1');
swipers.forEach((swiper) => {
  new Swiper(swiper, {
    loop: true,
    direction: 'vertical',
    autoplay: {
      delay: 2000,
      reverseDirection: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });
});
const swipers2 = document.querySelectorAll('.mySwiper2');
swipers2.forEach((swiper) => {
  new Swiper(swiper, {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });
});
const swipers3 = document.querySelectorAll('.mySwiper3');
swipers3.forEach((swiper) => {
  new Swiper(swiper, {
    loop: true,
    autoplay: {
      delay: 2000,
      reverseDirection: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });
});
const swipers4 = document.querySelectorAll('.mySwiper4');
swipers4.forEach((swiper) => {
  new Swiper(swiper, {
    loop: true,
    direction: 'vertical',
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });
});
const swipers5 = document.querySelectorAll('.mySwiper5');
swipers5.forEach((swiper) => {
  new Swiper(swiper, {
    loop: true,
    // direction: 'vertical',
    autoplay: {
      delay: 2000,
      reverseDirection: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });
});
