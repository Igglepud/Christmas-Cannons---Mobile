let gameoverScene = new Phaser.Scene('GameOver');
 
gameoverScene.init = function(data){



this.score=data.score;


}





    gameoverScene.create = function(){





    }

gameoverScene.create = function(){
    this.load.image("gameover", "assets/images/game over.png")
    this.winText=this.add.text(1000,850,"Great Job! Score: "+this.score, {fontSize:100});

    this.time.addEvent({
        delay:3000,
        callback:function(){this.scene.start("Title")},
        callbackScope:this
    
    
        })
      


   


    this.winText.setPosition(this.winText.x-this.winText.width/2, this.winText.y)

    
    
          
    };
    
        
            



gameoverScene.update = function(){
    
     
    
    
    
};

