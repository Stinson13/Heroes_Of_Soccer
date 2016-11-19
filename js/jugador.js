function Jugador() {
	this.maxCartasMazo = 40;
	this.maxCartasMano = 5;

	var rand = Math.floor((Math.random() * equipos.length));
	this.entrenador = game.global.entrenadores[rand];
    this.mazo = new Array ();

	var i;

	for (i = 0; i < this.maxCartasMazo; i++) {
		var jugador = Math.floor((Math.random() * game.global.jugadores.length));

		if (this.mazo.indexOf(game.global.jugadores[jugador]) != -1) {
            i--;
		} else {
            this.mazo.push(game.global.jugadores[jugador]);
		}
	}
    
	this.mano = new Array();

	for (i = 0; i < this.maxCartasMano; i++) {
		var jugador = Math.floor((Math.random() * this.mazo.length));

		if (this.mano.indexOf(this.mazo[jugador]) != -1) {
			i--;
		} else {
			this.mano.push(this.mazo[jugador]);
			this.mazo.splice(this.mazo.indexOf(this.mazo[jugador]), 1);
		}
	}

	this.cartasEnCampo = new Array();
	// this.cementerio = new Array();
}