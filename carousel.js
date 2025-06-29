const items = document.querySelectorAll('.carousel-item');
let angle = 0;
const angleStep = 360 / items.length;

function updateCarousel() {
  items.forEach((item, index) => {
    const rotation = angle + index * angleStep;
    item.style.transform = `rotateY(${rotation}deg) translateZ(400px)`;
  });
}

document.getElementById('next').addEventListener('click', () => {
  angle -= angleStep;
  updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  angle += angleStep;
  updateCarousel();
});

// Initialize positions
updateCarousel();