const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

function animate() {
  window.requestAnimationFrame(animate);
  renderVisual();
  resetMovement();
  handlePlayerMovement();
  handleEnemyMovement();
  detectCollision();
  checkGameEnd();
}

decreaseTimer();
animate();
