const pineglenButton = document.getElementById("pineglen-button");
const msmsButton = document.getElementById("msms-button");
const bhsButton = document.getElementById("bhs-button");

// back buttons
const backPineglen = document.getElementById("back-pineglen");
const backMsms = document.getElementById("back-msms");
const backBhs = document.getElementById("back-bhs");

pineglenButton.onclick = function () {
  animPut(homescreen, "/PinewoodChapel/pineglen.mp3", "/PinewoodChapel/images/morning.jpg", pineglenDiv);
}

msmsButton.onclick = function () {
  animPut(homescreen, "/PinewoodChapel/PS1.mp3", "/PinewoodChapel/images/afternoon.jpg", msmsDiv);
}

bhsButton.onclick = function () {
  animPut(homescreen, "/PinewoodChapel/PS2.mp3", "/PinewoodChapel/images/night.jpg", bhsDiv);
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