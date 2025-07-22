const pineglenButton = document.getElementById("pineglen-button");
const msmsButton = document.getElementById("msms-button");
const bhsButton = document.getElementById("bhs-button");

const bpPGButton = document.getElementById("bp-pg-button");
const bpMSMSButton = document.getElementById("bp-msms-button");
const bpBHSButton = document.getElementById("bp-bhs-button");

// const guestbookPGButton = document.getElementById("guestbook-pg-button");
// const guestbookMSMSButton = document.getElementById("guestbook-msms-button");
// const guestbookBHSButton = document.getElementById("guestbook-bhs-button");

const gbButton = document.getElementById("gb-button");

const guestButton = document.getElementById("guest-button");
const extraButton = document.getElementById("extra-button");

// file archive
const faPGButton = document.getElementById("fa-pg-button");
const faMSMSButton = document.getElementById("fa-msms-button");
const faBHSButton = document.getElementById("fa-bhs-button");

// back buttons
const backPineglen = document.getElementById("back-pineglen");
const backMsms = document.getElementById("back-msms");
const backBhs = document.getElementById("back-bhs");

const backPineglen_bp = document.getElementById("back-pineglen-bp"); // this is one building photo viewer for all but I'm far too lazy to change the name.
const backGuestbook = document.getElementById("back-guestbook");
const backFiles = document.getElementById("back-files");

pineglenButton.onclick = function () {
  animPut(homescreen, "pineglen.mp3", commonImagePath + "morning.jpg", pineglenDiv);
}

msmsButton.onclick = function () {
  animPut(homescreen, "PS1.mp3", commonImagePath + "afternoon.jpg", msmsDiv);
}

bhsButton.onclick = function () {
  animPut(homescreen, "PS2.mp3", commonImagePath + "night.jpg", bhsDiv);
}

// BP
let prevLoc = 0;
bpPGButton.onclick = function () {
  prevLoc = 0;
  bpIframe.src = "https://burlingtonemperor.github.io/building_photos_archive/?building=pineglen";
  animPut(pineglenDiv, "water.mp3", commonImagePath + "pool.jpg", buildingPhotoViewer);
}

bpMSMSButton.onclick = function () {
  prevLoc = 1;
  bpIframe.src = "https://burlingtonemperor.github.io/building_photos_archive/?building=msms";
  animPut(msmsDiv, "water.mp3", commonImagePath + "pool.jpg", buildingPhotoViewer);
}

bpBHSButton.onclick = function () {
  prevLoc = 2;
  bpIframe.src = "https://burlingtonemperor.github.io/building_photos_archive/?building=bhs";
  animPut(bhsDiv, "water.mp3", commonImagePath + "pool.jpg", buildingPhotoViewer);
}

// Guestbook
// guestbookPGButton.onclick = function () {
//   prevLoc = 0;
//   animPut(pineglenDiv, "Utopia_Asterisk.mp3", commonImagePath + "moon.jpg", guestbookDiv);
// }

// guestbookMSMSButton.onclick = function () {
//   prevLoc = 1;
//   animPut(msmsDiv, "Utopia_Asterisk.mp3", commonImagePath + "moon.jpg", guestbookDiv);
// }

// guestbookBHSButton.onclick = function () {
//   prevLoc = 2;
//   animPut(bhsDiv, "Utopia_Asterisk.mp3", commonImagePath + "moon.jpg", guestbookDiv);
// }

gbButton.onclick = function () {
  animPut(homescreen, "Utopia_Asterisk.mp3", commonImagePath + "moon.jpg", guestbookDiv);
}

// File archive
faPGButton.onclick = function () {
  if (window.mobileCheck() === true) {
    window.open("../file_map/pineglen.html");
    return false;
  }

  animPut(pineglenDiv, "Utopia_Asterisk.mp3", commonImagePath + "vernalpool.jpg", fileDiv);
  fileIframe.src = "../file_map/pineglen.html";
  prevLoc = 0;
}

faMSMSButton.onclick = function () {
  if (window.mobileCheck() === true) {
    window.open("../file_map/msms.html");
    return false;
  }

  animPut(msmsDiv, "Utopia_Asterisk.mp3", commonImagePath + "vernalpool.jpg", fileDiv);
  fileIframe.src = "../file_map/msms.html";
  prevLoc = 1;
}

faBHSButton.onclick = function () {
  if (window.mobileCheck() === true) {
    window.open("../file_map/bhs.html");
    return false;
  }

  animPut(bhsDiv, "Utopia_Asterisk.mp3", commonImagePath + "vernalpool.jpg", fileDiv);
  fileIframe.src = "../file_map/bhs.html";
  prevLoc = 1;
}

// back clicks
backPineglen.onclick = function () {
  animPut(pineglenDiv, "Utopia_Asterisk.mp3", commonImagePath + "pinksky.jpeg", homescreen);
}

backMsms.onclick = function () {
  animPut(msmsDiv, "windowsnt.mp3", commonImagePath + "pinksky.jpeg", homescreen);
}

backBhs.onclick = function () {
  animPut(bhsDiv, "PSX.mp3", commonImagePath + "pinksky.jpeg", homescreen);
}

// back BP
backPineglen_bp.onclick = function () {
  switch (prevLoc) {
    case 0:
      animPut(buildingPhotoViewer, "water.mp3", commonImagePath + "morning.jpg", pineglenDiv);
      break;
    case 1:
      animPut(buildingPhotoViewer, "water.mp3", commonImagePath + "afternoon.jpg", msmsDiv);
      break;
    case 2:
      animPut(buildingPhotoViewer, "water.mp3", commonImagePath + "night.jpg", bhsDiv);
      break;
  }
}

// back Guestbook
backGuestbook.onclick = function () {
  // switch (prevLoc) {
  //   case 0:
  //     animPut(guestbookDiv, "Utopia_Asterisk.mp3", commonImagePath + "morning.jpg", pineglenDiv);
  //     break;
  //   case 1:
  //     animPut(guestbookDiv, "Utopia_Asterisk.mp3", commonImagePath + "afternoon.jpg", msmsDiv);
  //     break;
  //   case 2:
  //     animPut(guestbookDiv, "Utopia_Asterisk.mp3", commonImagePath + "night.jpg", bhsDiv);
  //     break;
  // }

  animPut(guestbookDiv, "Utopia_Asterisk.mp3", commonImagePath + "pinksky.jpeg", homescreen);
}

// Guest users
guestButton.onclick = function () { // guest browsing
  openTheGates();
  console.log("a guest has arrived!");
}

// extras
extraButton.onclick = function () {
  window.open("extra.html");
}

// back from file viewer
backFiles.onclick = function () {
  switch (prevLoc) {
    case 0:
      animPut(fileDiv, "Utopia_Asterisk.mp3", commonImagePath + "morning.jpg", pineglenDiv);
      break;
    case 1:
      animPut(fileDiv, "Utopia_Asterisk.mp3", commonImagePath + "afternoon.jpg", msmsDiv);
      break;
    case 2:
      animPut(fileDiv, "Utopia_Asterisk.mp3", commonImagePath + "night.jpg", bhsDiv);
      break;
  }
}