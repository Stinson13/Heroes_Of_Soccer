function cartaJugador(nombre, equipo, posicion, ataque, nombre_foto) {
    Carta.call(this, nombre);
    this.equipo = equipo;
    this.posicion = posicion;
    this.ataque = ataque;
    this.nombre_foto = nombre_foto;
}