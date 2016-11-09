var loadState = {
    
    preload: function () {
        // Add a 'loading...' label on the screen
        var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...',{ font: '30px Arial', fill: '#ffffff' });
        loadingLabel.anchor.setTo(0.5, 0.5);
        
        // Display the progress bar
        var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);
        
        // Load all out assets
        
        // Load a new asset that we will use in the menu state
        game.load.image('imgMenu', 'assets/menu.png');
		game.load.image('titulo_juego', 'assets/titulo_juego.png');
		game.load.spritesheet('jugar_sprite_sheet', 'assets/botones/jugar_sprite_sheet.png', 287, 48);
		game.load.spritesheet('reglas_sprite_sheet', 'assets/botones/reglas_sprite_sheet.png', 287, 46);
		game.load.spritesheet('creditos_sprite_sheet', 'assets/botones/creditos_sprite_sheet.png', 286, 46);

        // Sounds
    },
    
    create: function() {
        
        // Go to the menu state
        game.state.start('menu');
    }
};