var reglasState = {
    
    create: function() {
       	// Add a background image
        imgMenu = game.add.image(0, 0, 'campoFutbol');
        imgMenu.scale.setTo(1.8, 1.88);
		
		// Display the name of the game
        tituloJuego = game.add.image(100, 50, 'titulo_juego');
		tituloJuego.scale.setTo(0.6, 1);
		
		
		// Button back to home
        game.add.button(425, 540, 'volver_sprite_sheet', volverHome, this, 2, 1, 0);
    }
};

function volverHome () {
	game.state.start('menu');
}