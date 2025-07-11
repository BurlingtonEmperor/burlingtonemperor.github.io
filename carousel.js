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

const preloadImages = [ // Why not just preload all the images at this point?
  '/burlingtonemperor.github.io/images/msms.webp',
  '/burlingtonemperor.github.io/images/pineglen.jpg',
  '/burlingtonemperor.github.io/images/bhs.jpg',
  '/burlingtonemperor.github.io/images/purplesky.jpg',
  '/burlingtonemperor.github.io/images/bloodmoon.jpg',
  '/burlingtonemperor.github.io/images/sunrise.webp',
  '/burlingtonemperor.github.io/images/pinksky.jpeg',
  '/burlingtonemperor.github.io/images/morning.jpg',
  '/burlingtonemperor.github.io/images/afternoon.jpg',
  '/burlingtonemperor.github.io/images/night.jpg'
  // '/PinewoodChapel/images/roadrug.jpg',
  // '/PinewoodChapel/images/capecod.jpg',
  // '/PinewoodChapel/images/stainedglass.jpg',
  // '/PinewoodChapel/images/stained1.jpeg',
  // '/PinewoodChapel/images/pinetree.jpg',
  // '/PinewoodChapel/images/peacock.jpg',
  // '/PinewoodChapel/images/winter.jpg',
  // '/PinewoodChapel/images/winter_maiden_resize.jpg',
  // '/PinewoodChapel/images/christmas.webp',
  // '/PinewoodChapel/images/elaborate.webp',
  // '/PinewoodChapel/images/hummingbirds.webp',
  // '/PinewoodChapel/images/flowers.jpg',
  // '/PinewoodChapel/images/spring.jpg',
  // '/PinewoodChapel/images/lake.jpg',
  // '/PinewoodChapel/images/plymouthrock.jpg',
  // '/PinewoodChapel/images/broken.jpg'
];

preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});