let gameScene = new Phaser.Scene("Game");

gameScene.init = function () {
  
  this.movecannon = function(){


  let angle = Phaser.Math.Angle.Between(
    this.cannon.x,
    this.cannon.y,
    this.input.activePointer.worldX,
    this.input.activePointer.worldY
  );

let angleConversion = Phaser.Math.RadToDeg(angle - 150);

   this.cannon.angle = angleConversion;




}


};


gameScene.create = function () {
  this.gameW = this.sys.game.config.width;
  this.gameH = this.sys.game.config.height;
  this.sound.play("Jingle Bell")
  this.cursors = this.input.keyboard.createCursorKeys();

  this.sky = this.add.image(500, 500, "sky");

  this.sky.setScale(1.5);

  this.sled = this.physics.add.image(100, 300, "Santa");

  this.sled.setScale(1.5);

  this.cannon = this.add.image(1000, 1200, "cannon");
  this.cannon.setOrigin(0.25, 0.75);
  this.cannon.setScale(1.5);

  this.wheel = this.add.image(1000, 1300, "wheel");

  this.wheel.setScale(0.35);

  this.sky.setInteractive();
this.sky.on("pointermove", function(){
  this.movecannon()
},this)
//   this.leftarrow = this.add.image(200,1200, "left arrow")
//   this.leftarrow.setScale(0.5)
//   this.leftarrow.on(
//     "pointerdown",
//     function () {

//       this.cannon.angle-=3
//     },this
//    )

  

//   this.rightarrow = this.add.image(500,1200, "right arrow")
//   this.rightarrow.setScale(0.5)
//   this.rightarrow.on(
//     "pointerdown",
//     function () {

//       this.cannon.angle+=3
//     },this
//    )
//  this.leftarrow.setInteractive();
//   this.rightarrow.setInteractive();

  this.shootbutton = this.add.image(1600,1200, "shootbutton")

 
  this.shootbutton.setInteractive();

  this.shootbutton.on(
    "pointerdown",
    function () {
      let spawn = this.cannon.getTopRight();

      let ornament = this.physics.add.image(spawn.x, spawn.y, "ornament");
      
      ornament.setScale(0.5);
      let angle = Phaser.Math.Angle.Between(
        ornament.x,
        ornament.y,
        this.cannon.x,
        this.cannon.y
)
 


this.physics.add.overlap(ornament,this.icicles,function(ornament,icicle){
  ornament.destroy()
 
  icicle.health-=1
 if (icicle.health== 0){this.score+=icicle.score
this.scoretext.setText("Score: "+this.score)


icicle.body.setEnable(false);




icicle.moveTween=this.tweens.add({
targets: [ornament,icicle],
alpha: 0,
delay: 0,
duration: 1000,
onComplete:function(){
icicle.destroy()

},
callbackScope:this,
})
}



},null,this)

     //set angle of bullet and create trajectory, second
      //parameter is the speed of the bullet
      ornament.rotation = angle;
      this.physics.velocityFromRotation(angle, 2000, ornament.body.velocity);
ornament.body.velocity.x*= -1;
ornament.body.velocity.y*= -1;
      

},this);


 
      this.icicles=this.add.group()



  this.sled.body.setVelocityX(-500);

  this.sled.body.setAllowGravity(false);

  this.isicleSpawn = this.time.addEvent({
    delay: 1000,
    repeat: -1,

    callbackScope: this,
    callback: function () {
      let isicle = this.physics.add.image(this.sled.x, this.sled.y, "isicle");
      isicle.body.setVelocityY(600);
      isicle.body.setAllowGravity(false);
      isicle.setScale(0.5);
isicle.score=5;
isicle.health=1
this.icicles.add(isicle)

    },
  });

  this.redisicleSpawn = this.time.addEvent({
    delay: 3000,
    repeat: -1,

    callbackScope: this,
    callback: function () {
      let redisicle = this.physics.add.image(
        this.sled.x,
        this.sled.y,
        "redisicle"
      );
      redisicle.body.setVelocityY(1200);
      redisicle.body.setAllowGravity(false);
      redisicle.setScale(0.5);
      redisicle.score=10
      redisicle.health=3
      this.icicles.add(redisicle)
    },
  });

  this.score = 0;
  this.scoretext = this.add.text(0, 0, "0", { fontSize: "72px" });


  this.timeLeft=30;
  this.timeText=this.add.text(550,90,this.timeLeft, { fontSize: "60px"})
        this.time.addEvent({
              delay: 1000,
              repeat: -1,
              callbackScope: this,
              callback: function (){
                    this.timeLeft--
  this.timeText.setText(this.timeLeft)
  if(this.timeLeft<0){
  this.sound.stopAll()
  this.scene.start("GameOver",{score:this.score})
  }
        }});
};
gameScene.update = function () {


  if (this.sled.x >= this.gameW - 45 || this.sled.x <= 45) {
    if (this.sled.x >= this.gameW - 45) {
      this.sled.flipX = false;
      this.sled.setPosition(this.sled.x - 10, this.sled.y);
      this.sled.body.setVelocityX(this.sled.body.velocity.x * -1);
    } else {
      this.sled.flipX = true;
      this.sled.body.setVelocityX(this.sled.body.velocity.x * -1);
      this.sled.setPosition(this.sled.x + 10, this.sled.y);
    }
  }



};
