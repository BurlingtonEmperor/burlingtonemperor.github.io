const sky = document.querySelector('.sky');

function createCloud() {
  const cloud = document.createElement('div');
  cloud.className = 'cloud';
  cloud.style.top = `${Math.random() * window.innerHeight}px`;
  cloud.style.left = `-${Math.random() * 400 + 200}px`;
  cloud.style.animationDuration = `${40 + Math.random() * 40}s`;
  cloud.style.opacity = `${0.6 + Math.random() * 0.3}`;
  cloud.style.transform = `scale(${0.8 + Math.random() * 0.5})`;
  cloud.style.animationDelay = `${Math.random() * 30}s`;
  sky.appendChild(cloud);
  
  setTimeout(() => {
    sky.removeChild(cloud);
  }, 80000); 
}

setInterval(createCloud, 4000);