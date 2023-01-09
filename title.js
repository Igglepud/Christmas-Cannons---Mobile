//Creates variable for our game scene.
let titleScene = new Phaser.Scene('Title');





// create after preload
titleScene.create = function(){
      
    this.background= this.add.sprite(0,0,'title') 

    this.background.setOrigin(0,0)
    this.titleText = this.add.text(500,850, 'Click Here to Start',{fontSize:72});
    this.titleText.setTint(0xBA427)
     // make this clickable
    this.titleText.setInteractive()

    this.titleText.on('pointerdown', function(){
       this.scene.start('Game')

    },this)


   this.titleText.textTween=this.tweens.add({
   targets: this.titleText,
   duration:1500,
   repeat:-1,
   yoyo:true,
   alpha:0,
    
   })
  this.background.setScale(1.3)

};

titleScene.update = function(){

  

};