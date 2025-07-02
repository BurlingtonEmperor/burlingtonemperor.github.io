// const items = document.querySelectorAll('.carousel-item');
// let angle = 0;
// const angleStep = 360 / items.length;

// function updateCarousel() {
//   items.forEach((item, index) => {
//     const rotation = angle + index * angleStep;
//     item.style.transform = `rotateY(${rotation}deg) translateZ(400px)`;
//   });
// }

// document.getElementById('next').addEventListener('click', () => {
//   angle -= angleStep;
//   updateCarousel();
// });

// document.getElementById('prev').addEventListener('click', () => {
//   angle += angleStep;
//   updateCarousel();
// });

// // Initialize positions
// updateCarousel();

const carousel = $(".carousel");
let currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e) {
  if (e.data.d=="n") {
    currdeg = currdeg - 60;
  }

  if (e.data.d=="p") {
    currdeg = currdeg + 60;
  }

  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

// loadCarousel("/PinewoodChapel/images/msms.webp", itemB[0]);
// loadCarousel("/PinewoodChapel/images/pineglen.jpg", itemA[0]);
// loadCarousel("/PinewoodChapel/images/bhs.jpg", itemC[0]);

const preloadImages = [
  '/PinewoodChapel/images/msms.webp',
  '/PinewoodChapel/images/pineglen.jpg',
  '/PinewoodChapel/images/bhs.jpg',
  '/PinewoodChapel/images/purplesky.jpg',
  '/PinewoodChapel/images/bloodmoon.jpg',
  '/PinewoodChapel/images/sunrise.webp'
];

preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});