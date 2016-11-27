function Jugador() {
	this.maxCartasMazo = 40;
	this.maxCartasMano = 3;
    this.maxBalones = 10;
	this.manaBalones = 1;
	this.vida = 30;

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
	this.eliminarCartaMano = eliminarCartaMano;
	this.addCartaMano = addCartaMano;
	this.eliminarCartaMazo = eliminarCartaMazo;
	this.addCartaMazo = addCartaMazo;
	this.manoLength = manoLength;
	this.mazoLength = mazoLength;
	this.manoIndexOf = manoIndexOf;
	this.mazoIndexOf = mazoIndexOf;
	this.getEntrenador = getEntrenador;
	this.getVida = getVida;
	this.restarVida = restarVida;
	this.getManaBalones = getManaBalones;
	this.restarManaBalones = restarManaBalones;
}

function eliminarCartaMano(jugador) {
	this.mano.splice(this.mano.indexOf(jugador), 1);
}

function addCartaMano(jugador) {
	this.mano.push(jugador);
}

function eliminarCartaMazo(jugador) {
	this.mazo.splice(this.mano.indexOf(jugador), 1);
}

function addCartaMazo(jugador) {
	this.mazo.push(jugador);
}

function manoLength() {
	return this.mano.length;
}

function mazoLength() {
	return this.mazo.length;
}

function manoIndexOf(index) {
	return this.mano[index];
}

function mazoIndexOf(index) {
	return this.mazo[index];
}

function getEntrenador() {
	return this.entrenador;
}

function getVida() {
	return this.vida;
}

function getManaBalones() {
	return this.manaBalones;
}

function restarVida(restaVida) {
	this.vida -= restaVida;
}

function restarManaBalones(restaManaBalones) {
	this.manaBalones -= restaManaBalones;
}
