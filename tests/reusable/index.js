document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const track = wrapper.querySelector('.carousel-track');
  const items = wrapper.querySelectorAll('.carousel-item');
  const prevBtn = wrapper.querySelector('.carousel-prev');
  const nextBtn = wrapper.querySelector('.carousel-next');
  let index = 0;

  function updateCarousel() {
    const width = wrapper.querySelector('.carousel').offsetWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (index < items.length - 1) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
});