// green-room.js

const greenRoom = document.querySelector('.green-room');

document.addEventListener('mousemove', (event) => {
  const x = Math.floor((event.clientX / window.innerWidth) * 255);
  const y = Math.floor((event.clientY / window.innerHeight) * 255);
  const color = `rgb(${x}, ${y}, 0)`;
  greenRoom.style.backgroundColor = color;
});

document.addEventListener('click', () => {
  const randomColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 0)`;
  greenRoom.style.backgroundColor = randomColor;
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
