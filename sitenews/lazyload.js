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