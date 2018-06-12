'use strict';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const update = (time) => {

};

const draw = (time) => {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
resize();
window.addEventListener('resize', resize);

const loop = (currentTime) => {
  update(currentTime);
  draw(currentTime);
  requestAnimationFrame(loop);
};
loop();