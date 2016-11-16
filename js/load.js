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
        //game.load.image('imgTablero', game.global.ASSETS + 'tablero.jpg');
        //game.load.image('imgFondoTablero', game.global.ASSETS + 'grada_ini.jpg');
		
		// Logos
		game.load.image('logoAMA', game.global.ASSETS + 'logos/AMA.png');
		game.load.spritesheet('twitter_sprite_sheet', game.global.ASSETS + 'logos/twitter_sprite_sheet.png', 50, 51);
		
		// Botones
		game.load.spritesheet('jugar_sprite_sheet', game.global.ASSETS + 'botones/jugar_sprite_sheet.png', 287, 48);
		game.load.spritesheet('reglas_sprite_sheet', game.global.ASSETS + 'botones/reglas_sprite_sheet.png', 287, 46);
		game.load.spritesheet('creditos_sprite_sheet', game.global.ASSETS + 'botones/creditos_sprite_sheet.png', 286, 46);
		game.load.spritesheet('volver_sprite_sheet', game.global.ASSETS + 'botones/volver_sprite_sheet.png', 287, 48);
        
        //Cartas
        var i, j;
        var index;
		
        // Jugadores
        for (i = 0, index = 0; i < equipos.length; i++) {
            for (j = 0; j < jugadores[equipos[i]].length; j++, index++) {
				var str = jugadores[equipos[i]][j].split("_");
                game.global.jugadores[index] = new cartaJugador(str[0], equipos[i], str[1], str[2]);
                game.load.image(jugadores[equipos[i]][j], game.global.ASSETS + equipos[i] + '/' + jugadores[equipos[i]][j] + '.png');
            }   
        }

        // Entrenadores
        for (i = 0, index = 0; i < entrenadores.length; i++, index++) {
            game.global.entrenadores[index] = new cartaEntrenador(entrenadores[i], equipos[i]);
            game.load.image(jugadores[equipos[i]][j], game.global.ASSETS + equipos[i] + '/' + entrenadores[i] + '.png');
        }   

        // Sounds
    },
    
    create: function() {
        
        // Go to the menu state
        game.state.start('menu');
    }
};