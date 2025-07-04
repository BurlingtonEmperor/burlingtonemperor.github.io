const items = document.querySelectorAll('.slider-item');
// let currentIndex = 0;

const nextA = document.getElementById("next-a"); // Pine Glen
const nextB = document.getElementById("next-b"); // MSMS
const nextC = document.getElementById("next-c"); // BHS

const prevA = document.getElementById("prev-a"); 
const prevB = document.getElementById("prev-b");
const prevC = document.getElementById("prev-c");

function updateSlider() {
  items.forEach((item, index) => {
    const offset = index - currentIndex;
    const absOffset = Math.abs(offset);

    if (absOffset > 3) {
      // Far-off items, hide or fade
      item.style.opacity = '0';
      item.style.pointerEvents = 'none';
      item.style.transform = 'scale(0.7) translateX(0px) rotateY(0deg)';
    } else {
      // Visible items
      item.style.opacity = '1';
      item.style.pointerEvents = 'auto';
      const translateX = offset * 220;       // Horizontal spacing
      const rotateY = offset * -30;          // Y-axis rotation for 3D tilt
      const scale = 1 - (0.1 * absOffset);   // Scale down sides
      item.style.transform = `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`;
    }
  });
}

function slideNext () {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateSlider();
  }
}

function slidePrev () {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

// Next Button
nextA.onclick = function () {
  slideNext();
}

nextB.onclick = function () {
  slideNext();
}

nextC.onclick = function () {
  slideNext();
}

// Prev Button
prevA.onclick = function () {
  slidePrev();
}

prevB.onclick = function () {
  slidePrev();
}

prevC.onclick = function () {
  slidePrev();
}

// document.getElementById('next').addEventListener('click', () => {
//   if (currentIndex < items.length - 1) {
//     currentIndex++;
//     updateSlider();
//   }
// });

// document.getElementById('prev').addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateSlider();
//   }
// });

// Initialize positions
updateSlider();