function cartaJugador(nombre, equipo, posicion, ataque, nombre_foto) {
    Carta.call(this, nombre, nombre_foto);
    this.equipo = equipo;
    this.posicion = posicion;
    this.ataque = ataque;
}