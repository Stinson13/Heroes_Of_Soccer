function Partida() {
 
    this.jugador1 = new Jugador();
    //por defecto, jugador2 sera la maquina
    this.jugador2 = new Jugador();
    
    this.turnoJugador = Math.floor((Math.random() * 2));

    //ganador = 0 ha ganado jugador1, ganador = 1 ha ganado jugador2
    this.ganador = -1;

    /*while(this.ganador == -1) {
    	// turno para el jugador 1
    	if (this.turnoJugador == 0) {

    		this.turnoJugador = 1;

    	// turno para el jugador 2
    	} else {

    		this.turnoJugador = 0;
    	}
    }*/

    this.getJugador1 = getJugador1;
    this.getJugador2 = getJugador2;
    this.getTurnoJugador = getTurnoJugador;
}

function getJugador1() {
    return this.jugador1;
}

function getJugador2() {
    return this.jugador2;
}

//turno = 0 para jugador1, turno = 1 para jugador2
function getTurnoJugador() {
    return this.turnoJugador;
}