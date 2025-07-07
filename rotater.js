const pineGlenRotator = document.querySelector('#pineglen-rotater');
const pineGlenCells = pineGlenRotator.querySelectorAll('.carousel__cell_pg');
let cellCount_pg; 

const msmsRotator = document.querySelector('#msms-rotater');
const msmsCells = msmsRotator.querySelectorAll('.carousel__cell_msms');
let cellCount_msms; 

const bhsRotator = document.querySelector('#bhs-rotater');
const bhsCells = bhsRotator.querySelectorAll('.carousel__cell_bhs');
let cellCount_bhs; 

let selectedIndex_pg = 0;
let selectedIndex_msms = 0;
let selectedIndex_bhs = 0;

let cellWidth = pineGlenRotator.offsetWidth;
let cellHeight = pineGlenRotator.offsetHeight;

let isHorizontal = true;
let rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
let radius, theta;
// console.log( cellWidth, cellHeight );

function rotateCarousel (rotatorNum) {
  let whichRotator;
  let whichSelectedIndex;

  switch (rotatorNum) {
    default:
    case 0:
      whichRotator = pineGlenRotator;
      whichSelectedIndex = selectedIndex_pg;
      break;
    case 1:
      whichRotator = msmsRotator;
      whichSelectedIndex = selectedIndex_msms;
      break;
    case 2:
      whichRotator = bhsRotator;
      whichSelectedIndex = selectedIndex_bhs;
      break;
  }

  let angle = theta * whichSelectedIndex * -1;
  whichRotator.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
}

const prevButton_pg = document.querySelector('#previous-button_pg');
prevButton_pg.addEventListener( 'click', function() {
  selectedIndex_pg--;
  rotateCarousel(0);
});

const nextButton_pg = document.querySelector('#next-button_pg');
nextButton_pg.addEventListener( 'click', function() {
  selectedIndex_pg++;
  rotateCarousel(0);
});

const prevButton_msms = document.querySelector('#previous-button_msms');
prevButton_msms.addEventListener( 'click', function() {
  selectedIndex_msms--;
  rotateCarousel(1);
});

const nextButton_msms = document.querySelector('#next-button_msms');
nextButton_msms.addEventListener( 'click', function() {
  selectedIndex_msms++;
  rotateCarousel(1);
});

const prevButton_bhs = document.querySelector('#previous-button_bhs');
prevButton_bhs.addEventListener( 'click', function() {
  selectedIndex_bhs--;
  rotateCarousel(2);
});

const nextButton_bhs = document.querySelector('#next-button_pg');
nextButton_bhs.addEventListener( 'click', function() {
  selectedIndex_bhs++;
  rotateCarousel(2);
});

const cellsRange = document.querySelector('.cells-range');
cellsRange.addEventListener('change', changeCarousel);
cellsRange.addEventListener('input', changeCarousel);

function changeCarousel() {
  cellCount_pg = cellsRange.value;
  cellCount_msms = cellsRange.value;
  cellCount_bhs = cellsRange.value;

  theta = 360 / cellCount_pg;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount_pg ) );
  for ( var i=0; i < pineGlenCells.length; i++ ) {
    var cell = pineGlenCells[i];
    if ( i < cellCount_pg ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  for ( var i=0; i < msmsCells.length; i++ ) {
    var cell = msmsCells[i];
    if ( i < cellCount_pg ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  for ( var i=0; i < bhsCells.length; i++ ) {
    var cell = bhsCells[i];
    if ( i < cellCount_pg ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  rotateCarousel(0);
  rotateCarousel(1);
  rotateCarousel(2);
}

let orientationRadios = document.querySelectorAll('input[name="orientation"]');
( function() {
  for ( var i=0; i < orientationRadios.length; i++ ) {
    var radio = orientationRadios[i];
    radio.addEventListener( 'change', onOrientationChange );
  }
})();

function onOrientationChange() {
  var checkedRadio = document.querySelector('input[name="orientation"]:checked');
  isHorizontal = checkedRadio.value == 'horizontal';
  rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  changeCarousel();
}

// set initials
onOrientationChange();