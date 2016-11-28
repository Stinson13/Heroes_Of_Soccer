var menuJugarState = {
    
    create: function() {
		game.stage.backgroundColor = 'black';
		
        // Add a background image
        imgMenu = game.add.image(0, 0, 'imgMenu');
        imgMenu.scale.setTo(0.6, 0.5);
		
        // Display the name of the game
        tituloJuego = game.add.image(100, 50, 'titulo_juego');
		tituloJuego.scale.setTo(0.6, 1);
        
        buttonJugar = game.add.button(425, 325, 'mazo_aleatorio', modoAleatorio, this, 2, 1, 0);
		buttonReglas = game.add.button(425, 400, 'define_tu_mazo', modoPrueba, this, 2, 1, 0);
		// Button back to home
        game.add.button(425, 475, 'volver_sprite_sheet', volverHome, this, 2, 1, 0);
        
    }
};

function modoAleatorio () {
	game.state.start('play');
}

function modoPrueba () {
	alert("Modo de juego aún no disponible");
}

function volverHome () {
	game.state.start('menu');
}