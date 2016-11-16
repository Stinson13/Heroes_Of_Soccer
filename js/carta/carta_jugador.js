function cartaJugador(nombre, equipo, posicion, ataque) {
    Carta.call(this, nombre);
    this.equipo = equipo;
    this.posicion = posicion;
    this.ataque = ataque;
}