const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
};

window.addEventListener("keydown", (event) => {
  // Player Key
  if (!player.dead) {
    switch (event.key) {
      case "w":
        player.velocity.y = -20;
        break;

      case "a":
        keys.a.pressed = true;
        player.lastKey = "a";
        break;

      case "d":
        keys.d.pressed = true;
        player.lastKey = "d";
        break;

      case " ":
        player.attack();
        break;
    }
  }

  // Enemy Key
  if (!enemy.dead) {
    switch (event.key) {
      case "ArrowUp":
        enemy.velocity.y = -20;
        break;

      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        enemy.lastKey = "ArrowLeft";
        break;

      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        enemy.lastKey = "ArrowRight";
        break;

      case "ArrowDown":
        enemy.attack();
        break;
    }
  }
});

window.addEventListener("keyup", (event) => {
  // Player Key
  switch (event.key) {
    case "a":
      keys.a.pressed = false;
      break;

    case "d":
      keys.d.pressed = false;
      break;
  }

  // Enemy Key
  switch (event.key) {
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;

    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
  }
});
