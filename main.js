// set game configuration
let config = {
    type: Phaser.AUTO,
    width: 1800,
    height: 1400,
    scene: [preloadScene,titleScene,gameScene,gameoverScene],
    pixelArt: false,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 1000},
            //debug: true,
        }
    }
};


//create new game and send configuration
let game = new Phaser.Game(config)