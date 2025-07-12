document.addEventListener("DOMContentLoaded", () => {
  const lazyDivs = document.querySelectorAll(".lazy-div:not(.visible)");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px 200px 0px",
    threshold: 0.1
  });

  lazyDivs.forEach(div => observer.observe(div));
});

function waitForElement(querySelector, timeout){
  return new Promise((resolve, reject)=>{
    var timer = false;
    if(document.querySelectorAll(querySelector).length) return resolve();
    const observer = new MutationObserver(()=>{
      if(document.querySelectorAll(querySelector).length){
        observer.disconnect();
        if(timer !== false) clearTimeout(timer);
        return resolve();
      }
    });
    observer.observe(document.body, {
      childList: true, 
      subtree: true
    });
    if(timeout) timer = setTimeout(()=>{
      observer.disconnect();
      reject();
    }, timeout);
  });
}

const body = document.body;
function loadBack (backSrc) {
  let newImg = new Image();

  newImg.onload = function () {
    body.style.backgroundImage = "url('" + newImg.src + "')";
  }
  newImg.src = backSrc;
}

waitForElement("body", 3000).then(function () {
  loadBack("IMG_1958.jpeg");
}).catch(() => {
  console.log("Error: did not load!");
});
