function Partida(jug1, jug2) {
 
    this.jugador1 = jug1;
    this.jugador2 = jug2;
    
    this.cementerio = new Array (game.global.maxCartasMazo*2);
    
    this.turnoInicial = 0; //turno = 0 para jugador1, turno = 1 para jugador2
    
    this.partidaFinalizada = 0; //0 para partida no finalizada, 1 para finalizada
    
    this.ganador = 0; //ganador = 0 ha ganado jugador1, ganador = 1 ha ganado jugador2
    
}