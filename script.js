// script.js

const title = document.getElementById('title');

title.addEventListener('animationend', () => {
  title.style.animation = 'jumble 2s ease-in-out infinite';
});
