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
// Spritesheet: https://www.leshylabs.com/apps/sstool/
// Gimp: escalado de las imagenes
        game.load.image('imgMenu', 'assets/menu.png');
		game.load.image('titulo_juego', 'assets/titulo_juego.png');
		game.load.image('campoFutbol', 'assets/campo_futbol.jpg');
        game.load.image('imgTablero', 'assets/tablero.jpg');
        game.load.image('imgFondoTablero', 'assets/grada_ini.jpg');
		
		// Logos
		game.load.image('logoAMA', 'assets/logos/AMA.png');
		game.load.spritesheet('twitter_sprite_sheet', 'assets/logos/twitter_sprite_sheet.png', 50, 51);
		
		// Botones
		game.load.spritesheet('jugar_sprite_sheet', 'assets/botones/jugar_sprite_sheet.png', 287, 48);
		game.load.spritesheet('reglas_sprite_sheet', 'assets/botones/reglas_sprite_sheet.png', 287, 46);
		game.load.spritesheet('creditos_sprite_sheet', 'assets/botones/creditos_sprite_sheet.png', 286, 46);
		game.load.spritesheet('volver_sprite_sheet', 'assets/botones/volver_sprite_sheet.png', 287, 48);
        
        //Cartas
        game.load.image('imgDorso', 'assets/dorso_carta_1.png');
        game.load.image('imgZidane', 'assets/real_madrid/Zidane_C.png');
        game.load.image('imgCholo', 'assets/atletico/Simeone_C.png');

        // Sounds
    },
    
    create: function() {
        
        // Go to the menu state
        game.state.start('menu');
    }
};