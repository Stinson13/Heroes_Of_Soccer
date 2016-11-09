var menuState = {
    
    create: function() {
        // Add a background image
        imgMenu = game.add.image(0, 0, 'imgMenu');
        imgMenu.scale.setTo(0.8, 1);
		
        // Display the name of the game
        titulo_juego = game.add.image(game.world.centerX - 560, 80, 'titulo_juego');
		titulo_juego.scale.setTo(0.7, 1);
        
        button_jugar = game.add.button(game.world.centerX - 125, 300, 'jugar_sprite_sheet', mostrar_creditos, this, 2, 1, 0);
		button_reglas = game.add.button(game.world.centerX - 125, 375, 'reglas_sprite_sheet', mostrar_creditos, this, 2, 1, 0);
		button_creditos = game.add.button(game.world.centerX - 125, 450, 'creditos_sprite_sheet', mostrar_creditos, this, 2, 1, 0);
    },
    
    start: function() {
        // Start the actual game
        game.state.start('play');
    }
};

function mostrar_creditos () {

    

}