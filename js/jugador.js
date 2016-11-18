function Jugador() {  
    
    this.robar = robar;
    this.bajarCarta = bajarCarta;

	var rand = Math.floor((Math.random() * equipos.length));
	this.entrenador = game.global.entrenadores[rand];
    this.vida = 30;
    
    this.cartasTablero = new Array (game.global.maxCartasTableroJ);
    
    this.mazo = new Array (game.global.maxCartasMazo);
    
	var i;

	for (i = 0; i < game.global.maxCartasMazo; i++) {
		var jugador = Math.floor((Math.random() * game.global.jugadores.length));

		if (this.mazo.indexOf(game.global.jugadores[jugador]) != -1) {
            i--;
		} else {
            this.mazo[i] = game.global.jugadores[jugador];
		}
	}
    
	this.mano = new Array(game.global.maxcartasMano);

	for (i = 0; i < game.global.maxcartasMano; i++) {
		var jugador = Math.floor((Math.random() * game.global.maxcartasMazo));

		if (this.mano.indexOf(this.mazo[jugador]) != -1) {
			this.mano[i] = this.mazo[jugador];
		} else {
			i--;
		}
	}

}

function robar (jugador, carta) {
    
    var len = jugador.mano.length;
    jugador.mano[len] = carta;
    
};

function bajarCarta (jugador, carta) {
        
     var len = jugador.cartasTablero.length;
     jugador.cartasTablero[len] = carta;

     button = game.add.button(100, 100, jugador.cartasTablero[len].nombre_foto, onClick, this, 2, 1, 0);
     button.scale.setTo(0.3, 0.3);
     button.onInputOver.add(over, button);
     button.onInputOut.add(out, button);

};

function onClick() {
    console.log("Has pinchado en la imagen");
};

function over(bot) {
    bot.scale.setTo(0.4, 0.4);
};

function out(bot) {
    bot.scale.setTo(0.3, 0.3);
};