// We initialising Phaser
var game = new Phaser.Game(window.innerWidth - 20, window.innerHeight - 20, Phaser.AUTO, 'gameDiv');

// We create our only state
var mainState = {

    preload: function() {
        game.load.image('img_menu', 'img/menu.png');
    },
    
    create: function() {
        
        this.coin = game.add.image(0, 0, 'img_menu');
        renderTexture = game.add.renderTexture(800, 600, 'img_menu');
    },

    update: function() {
        
    }
};

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');