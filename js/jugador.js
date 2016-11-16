function Jugador() {
	this.maxCartasMazo = 40;
	this.maxCartasMano = 5;

	var rand = Math.floor((Math.random() * equipos.length));
	this.entrenador = game.global.entrenadores[rand];

	var i;

	for (i = 0; i < this.maxCartasMazo; i++) {
		var equipo = Math.floor((Math.random() * equipos.length));
		var jugador = Math.floor((Math.random() * jugadores[equipo].length));

		if (this.mazo.indexOf(game.global.jugadores[equipo][jugador]) != -1) {
			this.mazo[i] = game.global.jugadores[equipo][jugador];
		} else {
			i--;
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