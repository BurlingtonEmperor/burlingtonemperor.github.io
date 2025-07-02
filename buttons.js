const pineglenButton = document.getElementById("pineglen-button");
const msmsButton = document.getElementById("msms-button");
const bhsButton = document.getElementById("bhs-button");

pineglenButton.onclick = function () {
  animPut(homescreen, "/PinewoodChapel/pineglen.mp3", "/PinewoodChapel/images/morning.jpg", pineglenDiv);
}

msmsButton.onclick = function () {
  animPut(homescreen, "/PinewoodChapel/PS1.mp3", "/PinewoodChapel/images/afternoon.jpg", msmsDiv);
}

bhsButton.onclick = function () {
  animPut(homescreen, "/PinewoodChapel/PS2.mp3", "/PinewoodChapel/images/night.jpg", bhsDiv);
}