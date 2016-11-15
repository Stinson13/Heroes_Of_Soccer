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
        game.load.image('imgMenu', game.global.ASSETS + 'menu.png');
		game.load.image('titulo_juego', game.global.ASSETS + 'titulo_juego.png');
		game.load.image('campoFutbol', game.global.ASSETS + 'campo_futbol.jpg');
        game.load.image('imgTablero', game.global.ASSETS + 'tablero.jpg');
        game.load.image('imgFondoTablero', game.global.ASSETS + 'grada_ini.jpg');
		
		// Logos
		game.load.image('logoAMA', game.global.ASSETS + 'logos/AMA.png');
		game.load.spritesheet('twitter_sprite_sheet', game.global.ASSETS + 'logos/twitter_sprite_sheet.png', 50, 51);
		
		// Botones
		game.load.spritesheet('jugar_sprite_sheet', game.global.ASSETS + 'botones/jugar_sprite_sheet.png', 287, 48);
		game.load.spritesheet('reglas_sprite_sheet', game.global.ASSETS + 'botones/reglas_sprite_sheet.png', 287, 46);
		game.load.spritesheet('creditos_sprite_sheet', game.global.ASSETS + 'botones/creditos_sprite_sheet.png', 286, 46);
		game.load.spritesheet('volver_sprite_sheet', game.global.ASSETS + 'botones/volver_sprite_sheet.png', 287, 48);
        
        //Cartas
        /*game.load.image('imgDorso', game.global.ASSETS + 'dorso_carta_1.png');
        game.load.image('imgZidane', game.global.ASSETS + 'real_madrid/Zidane_C.png');
        game.load.image('imgCholo', game.global.ASSETS + 'atletico/Simeone_C.png');*/
        
        var i, j;
        for (i = 0; i < equipos.length; i++) {
            for (j = 0; j < real_madrid.length; j++) {
                game.load.image(real_madrid[i], game.global.ASSETS + carpetas_equipos[i] + '/' + real_madrid[j] + '.png');
                // Split nombre jugador para obtener nombre, ataque, posicion
                new Jugador();
            }   
        }

        // Sounds
    },
    
    create: function() {
        
        // Go to the menu state
        game.state.start('menu');
    }
};