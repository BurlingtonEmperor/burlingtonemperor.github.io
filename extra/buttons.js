const francisButton = document.getElementById("francis-button");
const memorialButton = document.getElementById("memorial-button");
const hurldButton = document.getElementById("hurld-button");
const wildwoodButton = document.getElementById("wildwood-button");
const foxButton = document.getElementById("fox-button");

const backBP = document.getElementById("back-bp");

function animPut (elementToHide, imageToLoad, elementToShow) {
//   let audioFile = new Audio(soundEffect);
//   if (soundEffect == 0) {
//     // do nothing
//   }

//   else {
//     audioFile.cloneNode(true).play();
//   }
  
  loadBack(imageToLoad);
  $(elementToHide).hide();
  $(elementToShow).show();
}

backBP.onclick = function () {
  animPut(photoViewer, "../images/capecod.jpg", mainDiv);
}

francisButton.onclick = function () {
  bpIframe.src = "https://burlingtonemperor.github.io/building_photos_archive/?building=francis";
  animPut(mainDiv, "../extra/Winter.jpg", photoViewer);
}

hurldButton.onclick = function () {
  bpIframe.src = "https://burlingtonemperor.github.io/building_photos_archive/?building=hurld";
  animPut(mainDiv, "../extra/Winter.jpg", photoViewer);
}

wildwoodButton.onclick = function () {
  bpIframe.src = "https://burlingtonemperor.github.io/building_photos_archive/?building=wildwood";
  animPut(mainDiv, "../extra/Winter.jpg", photoViewer);
}

memorialButton.onclick = function () {
  bpIframe.src = "https://burlingtonemperor.github.io/building_photos_archive/?building=memorial";
  animPut(mainDiv, "../extra/Winter.jpg", photoViewer);
}

foxButton.onclick = function () {
  bpIframe.src = "https://burlingtonemperor.github.io/building_photos_archive/?building=foxhill";
  animPut(mainDiv, "../extra/Winter.jpg", photoViewer);
}