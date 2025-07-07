const wrapper = document.querySelector('.image-wrapper');

document.querySelector('.viewer').addEventListener('mousemove', (e) => {
  const bounds = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;
  const centerX = bounds.width / 2;
  const centerY = bounds.height / 2;

  const rotateX = -(y - centerY) / 20;
  const rotateY = (x - centerX) / 20;

  wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.querySelector('.viewer').addEventListener('mouseleave', () => {
  wrapper.style.transform = `rotateX(0deg) rotateY(0deg)`;
});