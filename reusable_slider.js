document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
  const track = wrapper.querySelector('.slider-track');
  const items = wrapper.querySelectorAll('.reusable-slider-item');
  const prevBtn = wrapper.querySelector('.slider-prev'); 
  const nextBtn = wrapper.querySelector('.slider-next');
  let index = 0;

  function updateCarousel() {
    const width = wrapper.querySelector('.reusable-slider').offsetWidth;
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