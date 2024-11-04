const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "/img/background.png",
});

const shop = new Sprite({
  position: {
    x: 600,
    y: 128,
  },
  imageSrc: "/img/shop.png",
  scale: 2.75,
  framesMax: 6,
});

const player = new Fighter({
  position: {
    x: 350,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  attackBox: {
    offset: {
      x: 67,
      y: 50,
    },
    width: 190,
    height: 50,
  },
  imageSrc: "/img/samuraiMack/Idle.png",
  framesMax: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 155,
  },
  sprites: {
    idle: {
      imageSrc: "/img/samuraiMack/Idle.png",
      framesMax: 8,
    },
    run: {
      imageSrc: "/img/samuraiMack/Run.png",
      framesMax: 8,
    },
    jump: {
      imageSrc: "/img/samuraiMack/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "/img/samuraiMack/Fall.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "/img/samuraiMack/Attack1.png",
      framesMax: 6,
    },
    takeHit: {
      imageSrc: "/img/samuraiMack/Take Hit - White Silhouette.png",
      framesMax: 4,
    },
    death: {
      imageSrc: "/img/samuraiMack/Death.png",
      framesMax: 6,
    },
  },
});

const enemy = new Fighter({
  position: {
    x: 625,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  attackBox: {
    offset: {
      x: -173,
      y: 50,
    },
    width: 170,
    height: 50,
  },
  imageSrc: "/img/kenji/Idle.png",
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 170,
  },
  sprites: {
    idle: {
      imageSrc: "/img/kenji/Idle.png",
      framesMax: 4,
    },
    run: {
      imageSrc: "/img/kenji/Run.png",
      framesMax: 8,
    },
    jump: {
      imageSrc: "/img/kenji/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "/img/kenji/Fall.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "/img/kenji/Attack1.png",
      framesMax: 4,
    },
    takeHit: {
      imageSrc: "/img/kenji/Take Hit.png",
      framesMax: 3,
    },
    death: {
      imageSrc: "/img/kenji/Death.png",
      framesMax: 7,
    },
  },
});
