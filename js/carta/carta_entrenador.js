function cartaEntrenador(nombre, equipo, nombre_foto) {
    Carta.call(this, nombre, nombre_foto);
    this.equipo = equipo;
}