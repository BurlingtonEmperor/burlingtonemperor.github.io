const track = document.querySelector('.slider-track');
let currentIndex = 0;

function updateSlider() {
  const shift = -(currentIndex * 270);  // 250px width + 20px total margin
  track.style.transform = `translateX(${shift}px)`;
}

document.getElementById('next').addEventListener('click', () => {
  if (currentIndex < track.children.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});