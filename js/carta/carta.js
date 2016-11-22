function Carta(nombre, nombre_foto) {
	this.nombre = nombre;
	this.nombre_foto = nombre_foto;

	this.getNombreFoto = getNombreFoto;
}

function getNombreFoto() {
	return this.nombre_foto;
}