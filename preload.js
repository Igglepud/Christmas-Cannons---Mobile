// create a new scene
let preloadScene = new Phaser.Scene("Preload");

//init

// load assets
preloadScene.preload = function () {
  this.load.image("cannon", "assets/images/cannon.png");

  this.load.image("Santa", "assets/images/Santa.png");

  this.load.image("title", "assets/images/title.png");

  this.load.image("sky", "assets/images/sky.png");
  this.load.image("gameover", "assets/images/game over.png");

  this.load.image("wheel", "assets/images/wheel.png");

  this.load.image("ornament", "assets/images/ornament.png");

  this.load.image("isicle", "assets/images/isicle.png");

  this.load.image("redisicle", "assets/images/redisicle.png");
  this.load.audio("Jingle Bell", "assets/sounds/music.mp3");

  this.load.image("left arrow", "assets/images/left arrow.png");

  this.load.image("right arrow", "assets/images/right arrow.png");

  this.load.image("shootbutton", "assets/images/shootbutton.png");
};
preloadScene.create = function () {
  this.scene.start("Title");
};
