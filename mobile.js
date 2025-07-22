if (window.mobileCheck() === true) {
//   alert("check");
  for (let i = 0; i < largeText.length; i++) {
    largeText[i].style.fontSize = "16vw";
  }

  userInterfaceWindow.style.width = "36%";

  guestbookIframe.src = "https://pinewoodchapel.netlify.app/mobile.html";
  body.style.overflowX = "hidden";
  guestbookIframe.style.overflowX = "hidden";
  
  siteNewsFont.style.fontSize = "3.5vw";
  // guestbookIframe.style.width = "500px";
}