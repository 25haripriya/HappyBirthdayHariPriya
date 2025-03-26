const swipers = document.querySelectorAll('.mySwiper');
swipers.forEach((swiper) => {
  new Swiper(swiper, {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });
});