this.posCartaCampoX = 170;

// We create our only state
var playState = {
    
    create: function() {
        // Cambiar por otra imagen de fondo
        imgMenu = game.add.image(0, 0, 'imgMenu');
        imgMenu.scale.setTo(0.6, 0.5);

        // Add a background image
        this.imgTablero = game.add.image(130, 0, 'imgTablero');
        this.imgTablero.scale.setTo(2.15, 1.1);

        this.imgGradaIzqda = game.add.image(0, 0, 'imgGradaIzqda');
        this.imgGradaIzqda.scale.setTo(1.35, 1.176);

        this.imgGradaDrcha = game.add.image(1025, 0, 'imgGradaDrcha');
        this.imgGradaDrcha.scale.setTo(1.35, 1.176);

        this.partida = new Partida();

        // TODO: añadir encima del entrenador los balones, que es el mana del jugador

        // Añadimos al tablero las cartas del jugador1
        // Entrenador
        this.entrenadorJugador1 = game.add.image(-5, 370, this.partida.jugador1.entrenador.nombre_foto);
        this.entrenadorJugador1.scale.setTo(0.35, 0.35);

        // TODO: añadir debajo del entrenador la vida del jugador

        // Mano
        var i;
        var posX, posY;
        this.jugadoresManoJug1 = new Array();
        this.jugadoresMazoJug1 = new Array();
        this.jugadoresCampoJug1 = new Array();

        for (i = 0, posX = 300, posY = 425; i < this.partida.jugador1.mano.length; i++, posX+=125) {
            this.jugadoresManoJug1[i] = game.add.button(posX, posY, this.partida.jugador1.mano[i].nombre_foto, sacarCarta, 
                {contexto: this, 
                    botonesJugadoresMano: this.jugadoresManoJug1,
                    cartaJugador: this.partida.jugador1.mano[i], 
                    jugador: this.partida.jugador1, 
                    jugadoresCampo: this.jugadoresCampoJug1}, 2, 1, 0);
            this.jugadoresManoJug1[i].scale.setTo(0.2, 0.2);
            this.jugadoresManoJug1[i].onInputOver.add(over, {param1: this, param2: this.jugadoresManoJug1[i]});
            this.jugadoresManoJug1[i].onInputOut.add(out, {param1: this, param2: this.jugadoresManoJug1[i]});
        }

        // Mazo restante
        for (i = 0; i < this.partida.jugador1.mazo.length; i++) {
            this.jugadoresMazoJug1[i] = game.add.button(1020, 350, 'dorsoCarta', obtenerCarta,
                {param1: this, param2: this.jugadoresMazoJug1[i]}, 2, 1, 0);
            this.jugadoresMazoJug1[i].scale.setTo(0.45, 0.45);
        }

        // TODO: añadir el boton para pasar al siguiente turno encima del mazo de robar

        // Añadimos al tablero las cartas del jugador2
        // TODO: mismo procedimiento que con jugador1
        //       Mostrar entrenador en mismo lado que jugador1
    }
        
};

function obtenerCarta() {
    console.log("Obtiene carta");
}

function sacarCarta() {
    // Comprobar que no haya mas de 7 en campo
    if (this.jugadoresCampo.length == 7) {
        // TODO: mostrar error en pantalla
        return;
    }

    // Añadir boton jugador al campo
    this.jugador.cartasEnCampo.push(this.cartaJugador);

    // TODO: cambiar listener y argumetos
    this.jugadorAñadir = game.add.button(posCartaCampoX, 300, this.cartaJugador.nombre_foto, obtenerCarta, this, 2, 1, 0);
    this.jugadorAñadir.scale.setTo(0.2, 0.2);
    this.jugadorAñadir.onInputOver.add(over, {param1: this, param2: this.jugadorAñadir});
    this.jugadorAñadir.onInputOut.add(out, {param1: this, param2: this.jugadorAñadir});

    this.jugadoresCampo.push(this.jugadorAñadir);

    posCartaCampoX += 125;

    // Eliminar boton del jugador de mano
    //this.botonesJugadoresMano[this.index].kill();
    for (var boton in this.botonesJugadoresMano) {
        if (this.botonesJugadoresMano[boton] != null && 
            this.botonesJugadoresMano[boton].key == this.cartaJugador.nombre_foto) {

            this.botonesJugadoresMano[boton].kill();
            this.botonesJugadoresMano[boton] = null;
            break;
        } 
    }

    this.jugador.mano.splice(this.cartaJugador, 1);

    // ¿Reajustar cartas del campo?
}

function over() {
    this.param2.scale.setTo(0.33, 0.33);
}

function out() {
    this.param2.scale.setTo(0.2, 0.2);
}