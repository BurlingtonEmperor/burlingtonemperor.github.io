const pineglenButton = document.getElementById("pineglen-button");
const msmsButton = document.getElementById("msms-button");
const bhsButton = document.getElementById("bhs-button");

const bpPGButton = document.getElementById("bp-pg-button");
const bpMSMSButton = document.getElementById("bp-msms-button");
const bpBHSButton = document.getElementById("bp-bhs-button");

const guestbookPGButton = document.getElementById("guestbook-pg-button");
const guestbookMSMSButton = document.getElementById("guestbook-msms-button");
const guestbookBHSButton = document.getElementById("guestbook-bhs-button");

// back buttons
const backPineglen = document.getElementById("back-pineglen");
const backMsms = document.getElementById("back-msms");
const backBhs = document.getElementById("back-bhs");

const backPineglen_bp = document.getElementById("back-pineglen-bp"); // this is one building photo viewer for all but I'm far too lazy to change the name.
const backGuestbook = document.getElementById("back-guestbook");

pineglenButton.onclick = function () {
  animPut(homescreen, "/PinewoodChapel/pineglen.mp3", "/PinewoodChapel/images/morning.jpg", pineglenDiv);
}

msmsButton.onclick = function () {
  animPut(homescreen, "/PinewoodChapel/PS1.mp3", "/PinewoodChapel/images/afternoon.jpg", msmsDiv);
}

bhsButton.onclick = function () {
  animPut(homescreen, "/PinewoodChapel/PS2.mp3", "/PinewoodChapel/images/night.jpg", bhsDiv);
}

// BP
let prevLoc = 0;
bpPGButton.onclick = function () {
  prevLoc = 0;
  bpIframe.src = "https://burlingtonemperor.github.io/building_photos_archive/?building=pineglen";
  animPut(pineglenDiv, "/PinewoodChapel/water.mp3", "/PinewoodChapel/images/pool.jpg", buildingPhotoViewer);
}

bpMSMSButton.onclick = function () {
  prevLoc = 1;
  bpIframe.src = "https://burlingtonemperor.github.io/building_photos_archive/?building=msms";
  animPut(msmsDiv, "/PinewoodChapel/water.mp3", "/PinewoodChapel/images/pool.jpg", buildingPhotoViewer);
}

bpBHSButton.onclick = function () {
  prevLoc = 2;
  bpIframe.src = "https://burlingtonemperor.github.io/building_photos_archive/?building=bhs";
  animPut(bhsDiv, "/PinewoodChapel/water.mp3", "/PinewoodChapel/images/pool.jpg", buildingPhotoViewer);
}

// Guestbook
guestbookPGButton.onclick = function () {
  prevLoc = 0;
  animPut(pineglenDiv, "/PinewoodChapel/Utopia_Asterisk.mp3", "/PinewoodChapel/images/moon.jpg", guestbookDiv);
}

guestbookMSMSButton.onclick = function () {
  prevLoc = 1;
  animPut(msmsDiv, "/PinewoodChapel/Utopia_Asterisk.mp3", "/PinewoodChapel/images/moon.jpg", guestbookDiv);
}

guestbookBHSButton.onclick = function () {
  prevLoc = 2;
  animPut(bhsDiv, "/PinewoodChapel/Utopia_Asterisk.mp3", "/PinewoodChapel/images/moon.jpg", guestbookDiv);
}

// back clicks
backPineglen.onclick = function () {
  animPut(pineglenDiv, "/PinewoodChapel/Utopia_Asterisk.mp3", "/PinewoodChapel/images/pinksky.jpeg", homescreen);
}

backMsms.onclick = function () {
  animPut(msmsDiv, "/PinewoodChapel/windowsnt.mp3", "/PinewoodChapel/images/pinksky.jpeg", homescreen);
}

backBhs.onclick = function () {
  animPut(bhsDiv, "/PinewoodChapel/PSX.mp3", "/PinewoodChapel/images/pinksky.jpeg", homescreen);
}

// back BP
backPineglen_bp.onclick = function () {
  switch (prevLoc) {
    case 0:
      animPut(buildingPhotoViewer, "/PinewoodChapel/water.mp3", "/PinewoodChapel/images/morning.jpg", pineglenDiv);
      break;
    case 1:
      animPut(buildingPhotoViewer, "/PinewoodChapel/water.mp3", "/PinewoodChapel/images/afternoon.jpg", msmsDiv);
      break;
    case 2:
      animPut(buildingPhotoViewer, "/PinewoodChapel/water.mp3", "/PinewoodChapel/images/night.jpg", bhsDiv);
      break;
  }
}

// back Guestbook
backGuestbook.onclick = function () {
  switch (prevLoc) {
    case 0:
      animPut(guestbookDiv, "/PinewoodChapel/Utopia_Asterisk.mp3", "/PinewoodChapel/images/morning.jpg", pineglenDiv);
      break;
    case 1:
      animPut(guestbookDiv, "/PinewoodChapel/Utopia_Asterisk.mp3", "/PinewoodChapel/images/afternoon.jpg", msmsDiv);
      break;
    case 2:
      animPut(guestbookDiv, "/PinewoodChapel/Utopia_Asterisk.mp3", "/PinewoodChapel/images/night.jpg", bhsDiv);
      break;
  }
}