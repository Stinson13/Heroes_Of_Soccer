var reglasState = {
    
    create: function() {
       	// Add a background image
        imgMenu = game.add.image(0, 0, 'campoFutbol');
        imgMenu.scale.setTo(1.8, 1.88);
		
		// Display the name of the game
        tituloJuego = game.add.image(100, 50, 'titulo_juego');
		tituloJuego.scale.setTo(0.6, 1);
        
        var text1 = "Elementos del juego:\n     - 2 Jugadores: Cada jugador tiene un número\n     de vida (máximo 30), un número de balones\n     de maná (máximo 10), una baraja de 40 cartas,\n     un entrenador que le representa en la partida\n     y una mano (máximo 5).\n     - Un Tablero: cada jugador tendrá su lado,\n     sobre el cual podrán bajar cartas hasta que se\n     depositen un máximo de 7 cartas.\n     - Un Cementerio: zona de la partida a la cual se\n     enviarán las cartas destruidas/desconvocadas\n     durante la partida.";
        var labelText1 = game.add.text(30, 200, text1);
		labelText1.fontSize = 15;
		labelText1.fill = "white";
        
        var text2 = "Objetivo del juego:\n     Derrotar al jugador oponente, es decir,\n     conseguir quitarle todos los puntos de vida.\n\nInicio del Juego:\n     Cada jugador empieza la partida con 3 cartas\n     en la mano, con 1 balón de maná y con 30\n     puntos de vida.\n\n"+
            "Inicio del Turno:\n     Al inicio del turno se roba una carta y se le\n     añade un balón de maná al jugador, siempre y \n     cuando no se tenga ya el máximo de cartas\n     en la mano o el máximo de balones.";
        var labelText2 = game.add.text(420, 200, text2);
		labelText2.fontSize = 15;
		labelText2.fill = "white";
        
        var text3 = "Turno:\n     El jugador puede bajar cartas, hasta que sus\n     balones se le agoten en ese turno, y atacar\n     con cada carta en el tabero una vez por turno.\n\nFase de ataque:\n     El jugador que tiene el turno selecciona la\n     carta con la que desea atacar. El oponente\n     decidirá si defender con una carta, o recibir\n     el ataque. En caso de que se elija defender,\n     deberá seleccionar una carta defensora. La\n     carta que tenga mayor puntuación será la\n     que permanezca en la partida, la otra será\n     enviada al cementerio.";
        var labelText3 = game.add.text(795, 200, text3);
		labelText3.fontSize = 15;
		labelText3.fill = "white";
		
		// Button back to home
        game.add.button(425, 540, 'volver_sprite_sheet', volverHome, this, 2, 1, 0);
    }
};

function volverHome () {
	game.state.start('menu');
}