this.equipos = [
	'real_madrid',
	'atletico',
	'barcelona'
];

/* 
	Nombre de entrenador en el mismo orden de aparicion
	que los equipos
*/
this.entrenadores = [
	'zidane'
]

// Real Madrid
this.jugadores[this.equipos[0]] = [
	'asensio_mc_6',
	'bale_dl_9',
	'benzema_dl_8'
];

// Atletico
this.jugadores[this.equipos[1]] = [
	'augusto_mc_6'
];

// Barcelona
this.jugadores[this.equipos[2]] = [
	'agomes_mc_7'
];

var i;
this.numTotalJugadores = 0;
for (i = 0; i < this.equipos.length; i++) {
	this.numTotalJugadores += this.jugadores[this.equipos[i]].length;
}