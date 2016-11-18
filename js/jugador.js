function Jugador() {
	this.maxCartasMazo = 40;
	this.maxCartasMano = 5;

	var rand = Math.floor((Math.random() * equipos.length));
	this.entrenador = game.global.entrenadores[rand];
    this.mazo = new Array (this.maxCartasMazo);

	var i;

	for (i = 0; i < this.maxCartasMazo; i++) {
		var jugador = Math.floor((Math.random() * game.global.jugadores.length));

		if (this.mazo.indexOf(game.global.jugadores[jugador]) != -1) {
            i--;
		} else {
            this.mazo[i] = game.global.jugadores[jugador];
		}
	}
    
	this.mano = new Array(this.maxcartasMano);

	for (i = 0; i < this.maxcartasMano; i++) {
		var jugador = Math.floor((Math.random() * this.maxcartasMazo));

		if (this.mano.indexOf(this.mazo[jugador]) != -1) {
			this.mano[i] = this.mazo[jugador];
		} else {
			i--;
		}
	}

	this.cementerio;
}