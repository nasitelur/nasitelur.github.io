// Game Duration
let timer = 30;
let timerId = undefined;

function decreaseTimer() {
  timerId = setTimeout(decreaseTimer, 1000);
  if (timer > 0) {
    timer--;
    document.querySelector(".timer-container").innerHTML = timer;
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId });
  }
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector(".game-status").style.display = "flex";
  if (player.health === enemy.health) {
    document.querySelector(".game-status").innerHTML = "Tie";
  } else if (player.health > enemy.health) {
    document.querySelector(".game-status").innerHTML = "Player 1 Wins";
  } else {
    document.querySelector(".game-status").innerHTML = "Player 2 Wins";
  }
}

function checkGameEnd() {
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId });
  }
}

function rectangularCollision({ playerRect, enemyRect }) {
  return (
    playerRect.attackBox.position.x + playerRect.attackBox.width >= enemyRect.position.x &&
    playerRect.attackBox.position.x <= enemyRect.position.x + enemyRect.width &&
    playerRect.attackBox.position.y + playerRect.attackBox.height >= enemyRect.position.y &&
    playerRect.attackBox.position.y <= enemyRect.position.y + enemyRect.height
  );
}

function detectCollision() {
  // Player
  if (rectangularCollision({ playerRect: player, enemyRect: enemy }) && player.isAttacking && player.framesCurrent === 4) {
    enemy.takeHit();
    player.isAttacking = false;

    gsap.to(".enemyHealth", {
      width: enemy.health + "%",
    }); // GSAP Animation Library
  }

  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false;
  }

  // Enemy
  if (rectangularCollision({ playerRect: enemy, enemyRect: player }) && enemy.isAttacking && enemy.framesCurrent === 2) {
    player.takeHit();
    enemy.isAttacking = false;

    gsap.to(".playerHealth", {
      width: player.health + "%",
    }); // GSAP Animation Library
  }

  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false;
  }
}

function renderVisual() {
  background.update();
  shop.update();
  ctx.fillStyle = "rgba(255,255,255,0.15)"; // Apply Filter
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();
}

function resetMovement() {
  player.velocity.x = 0;
  enemy.velocity.x = 0;
}

function handlePlayerMovement() {
  if (keys.a.pressed && player.lastKey === "a") {
    player.velocity.x = -5;
    player.switchSprite("run");
  } else if (keys.d.pressed && player.lastKey === "d") {
    player.velocity.x = 5;
    player.switchSprite("run");
  } else {
    player.switchSprite("idle");
  }

  if (player.velocity.y < 0) {
    player.switchSprite("jump");
  } else if (player.velocity.y > 0) {
    player.switchSprite("fall");
  }
}

function handleEnemyMovement() {
  if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -5;
    enemy.switchSprite("run");
  } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
    enemy.velocity.x = 5;
    enemy.switchSprite("run");
  } else {
    enemy.switchSprite("idle");
  }

  if (enemy.velocity.y < 0) {
    enemy.switchSprite("jump");
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite("fall");
  }
}
