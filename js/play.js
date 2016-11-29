this.posicionesEnCampoJug1 = [
    170,
    295,
    420,
    545,
    670,
    795,
    920
];

this.posicionesEnManoJug1 = [
    300,
    425,
    550,
    675,
    800
];

this.posicionesLibresEnCampoJug1 = [
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];

this.posicionesLibresEnManoJug1 = [
    "",
    "",
    "",
    "",
    ""
];

this.posicionesEnCampoJug2 = [
    170,
    295,
    420,
    545,
    670,
    795,
    920
];

this.posicionesEnManoJug2 = [
    300,
    425,
    550,
    675,
    800
];

this.posicionesLibresEnCampoJug2 = [
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];

this.posicionesLibresEnManoJug2 = [
    "",
    "",
    "",
    "",
    ""
];

this.botonesManoJug1 = new Array();
this.botonesMazoJug1 = new Array();
this.botonesCampoJug1 = new Array();
this.balonesJug1 = new Array();

this.botonesManoJug2 = new Array();
this.botonesMazoJug2 = new Array();
this.botonesCampoJug2 = new Array();
this.balonesJug2 = new Array();

this.botonEndTurn;

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

        this.terminarJuego = game.add.button(1040, 560, 'rueda_sistema', mostrarPanelTerminarJuego, this, 2, 1, 0);
        this.terminarJuego.scale.setTo(0.8, 0.8);

        this.partida = new Partida();

        // Vida del jugador1
        for (i = 0; i <= this.partida.getJugador1().getVida(); i++) {
            game.add.image(40, 315, 'vida' + i);
        }

        // Barra de balones
        barrabalones1 = game.add.image(5, 565, 'barrabalones');
        barrabalones1.scale.setTo(0.7, 0.7);
        
        for (i = 0, posX = 0, posY = 563; i < this.partida.getJugador1().getManaBalones(); i++, posX += 25 ) {
            
            balonesJug1[i] = game.add.image(posX, posY, 'balon');
            balonesJug1[i].scale.setTo(0.1, 0.1);
            
        }

        // Añadimos al tablero las cartas del jugador1
        // Entrenador
        this.entrenadorJugador1 = game.add.image(-5, 370, this.partida.getJugador1().getEntrenador().getNombreFoto());
        this.entrenadorJugador1.scale.setTo(0.35, 0.35);

        // Mano
        var i;
        var posX, posY;

        for (i = 0, posX = 300, posY = 425; i < this.partida.getJugador1().manoLength(); i++, posX+=125) {
            botonesManoJug1[i] = game.add.button(posX, posY, this.partida.getJugador1().manoIndexOf(i).getNombreFoto(), sacarCarta, 
                {
                    contexto: this, 
                    botonesJugadoresMano: botonesManoJug1,
                    cartaAñadir: this.partida.getJugador1().manoIndexOf(i), 
                    jugadorPartida: this.partida.getJugador1(), 
                    botonesJugadoresCampo: botonesCampoJug1
                }, 2, 1, 0);
            botonesManoJug1[i].scale.setTo(0.2, 0.2);
            botonesManoJug1[i].onInputOver.add(over, {param1: this, param2: botonesManoJug1[i]});
            botonesManoJug1[i].onInputOut.add(out, {param1: this, param2: botonesManoJug1[i]});
            // Marcamos como ocupada la posicion en la mano
            posicionesLibresEnManoJug1[i] = this.partida.getJugador1().manoIndexOf(i).getNombreFoto();
        }

        // Mazo restante
        for (i = 0; i < this.partida.getJugador1().mazoLength(); i++) {
            botonesMazoJug1[i] = game.add.button(1020, 350, 'dorsoCarta', obtenerCarta,
                {   
                    contexto: this,
                    botonesJugadoresMano: botonesManoJug1,
                    cartaAñadir: this.partida.getJugador1().mazoIndexOf(i),
                    jugadorPartida: this.partida.getJugador1(),
                    botonesJugadoresMazo: botonesMazoJug1
                }, 2, 1, 0);
            botonesMazoJug1[i].scale.setTo(0.45, 0.45);
        }

        // Vida del jugador2
        for (i = 0; i <= this.partida.getJugador2().getVida(); i++) {
            game.add.image(40, 240, 'vida' + i);
        }


        // Barra balones
        barrabalones2 = game.add.image(5, 5, 'barrabalones');
        barrabalones2.scale.setTo(0.7, 0.7);
        
        for (i = 0, posX = 0, posY = 3; i < this.partida.getJugador2().getManaBalones(); i++, posX += 25 ) {
            
            balonesJug2[i] = game.add.image(posX, posY, 'balon');
            balonesJug2[i].scale.setTo(0.1, 0.1);
            
        }

        // Añadimos al tablero las cartas del jugador2
        // Entrenador
        this.entrenadorJugador2 = game.add.image(-5, 45, this.partida.getJugador2().getEntrenador().getNombreFoto());
        this.entrenadorJugador2.scale.setTo(0.35, 0.35);

        // Añadimos al tablero las cartas del jugador2
        for (i = 0, posX = 300, posY = 15; i < this.partida.getJugador2().manoLength(); i++, posX+=125) {
            botonesManoJug2[i] = game.add.button(posX, posY, 'dorsoCarta', sacarCarta, 
                {
                    contexto: this, 
                    botonesJugadoresMano: botonesManoJug1,
                    cartaAñadir: this.partida.getJugador1().manoIndexOf(i), 
                    jugadorPartida: this.partida.getJugador1(), 
                    botonesJugadoresCampo: botonesCampoJug1
                }, 2, 1, 0);
            botonesManoJug2[i].scale.setTo(0.2, 0.2);
            botonesManoJug2[i].inputEnabled = false;

            // Marcamos como ocupada la posicion en la mano
            posicionesLibresEnManoJug2[i] = this.partida.getJugador2().manoIndexOf(i).getNombreFoto();
        }

        // Mazo restante
        for (i = 0; i < this.partida.getJugador2().manoLength(); i++) {
            botonesMazoJug2[i] = game.add.button(1020, 15, 'dorsoCarta', obtenerCarta,
                {   
                    contexto: this,
                    botonesJugadoresMano: botonesManoJug2,
                    cartaAñadir: this.partida.getJugador2().mazoIndexOf(i),
                    jugadorPartida: this.partida.getJugador2(),
                    botonesJugadoresMazo: botonesMazoJug2
                }, 2, 1, 0);
            botonesMazoJug2[i].scale.setTo(0.45, 0.45);
            botonesMazoJug2[i].inputEnabled = false;
        }

        // Añadir el boton para pasar al siguiente turno encima del mazo de robar
        botonEndTurn = game.add.button(1040, 275, 'end_turn', terminarTurno, 
            {
                contexto: this, 
                partida: this.partida
            }, 2, 1, 0);

        if (this.partida.getTurnoJugador() == 1) {
            botonEndTurn.inputEnabled = false;
        }
        
    }   
};

function mostrarPanelTerminarJuego () {
    if (confirm("¿Seguro que quieres salir del juego?") == true) {
        game.state.start('menu');
    }
}

function onClick() {
    alert("Función atacar no disponible");
}

function terminarTurno() {
    alert("Terminar turno");

    // Turno del jugador1
    if (this.partida.getTurnoJugador() == 0) {
        botonEndTurn.inputEnabled = false;
        // TODO: llamar funcion para que maquina saque carta
    } else {
        botonEndTurn.inputEnabled = true;
    }
}

function obtenerCarta() {
    // Comprobar que no haya mas de 5 cartas en mano
    if (botonesManoJug1.length == 5) {
        // TODO: Mostrar mensaje de error por pantalla
        alert("Ya tienes 5 cartas en mano");
        return;
    }

    // Añadir carta a la mano del jugador
    this.jugadorPartida.addCartaMano(this.cartaAñadir);

    // Añadir boton a la mano
    var posX;
    var i;

    for (i = 0; i < posicionesLibresEnManoJug1.length; i++) {
        if (posicionesLibresEnManoJug1[i] == "") {
            posX = i;
            posicionesLibresEnManoJug1[i] = this.cartaAñadir.nombre_foto;
            break;
        }
    }

    this.botonCartaAñadir = game.add.button(posicionesEnManoJug1[posX], 425, this.cartaAñadir.nombre_foto, sacarCarta, 
        {
            contexto: this, 
            botonesManoJug1: botonesManoJug1,
            cartaAñadir: this.cartaAñadir, 
            jugadorPartida: this.jugadorPartida, 
            botonesCampoJug1: botonesManoJug1
        }, 2, 1, 0);
    this.botonCartaAñadir.scale.setTo(0.2, 0.2);
    this.botonCartaAñadir.onInputOver.add(over, {param1: this, param2: this.botonCartaAñadir});
    this.botonCartaAñadir.onInputOut.add(out, {param1: this, param2: this.botonCartaAñadir});

    botonesManoJug1.push(this.botonCartaAñadir);

    // Eliminar boton del mazo
    if (this.botonesJugadoresMazo.length != 0) {
        this.botonesJugadoresMazo[this.botonesJugadoresMazo.length - 1].kill();
        this.botonesJugadoresMazo.splice(this.botonesJugadoresMazo.length - 1, 1);
    } else {
        console.log("Sin cartas en el mazo");
    }

    // Eliminar carta del mazo del jugador
    this.jugadorPartida.eliminarCartaMazo(this.cartaAñadir);
}

function sacarCarta() {
    // Comprobamos que no haya mas de 7 jugadores en campo
    if (botonesCampoJug1.length == 7) {
        // Mostrar error por pantalla
        alert("Ya tienes 7 cartas en campo");
        return;
    }

    // Añadir carta a las cartas en campo del jugador 
    this.jugadorPartida.addCartaMazo(this.cartaAñadir);

    // Añadir boton al campo
    var posX;

    // Localizamos la primera posicion libre en el campo y la marcamos como ocupada
    for (var i = 0; i < posicionesLibresEnCampoJug1.length; i++) {
        if (posicionesLibresEnCampoJug1[i] == "") {
            posX = i;
            posicionesLibresEnCampoJug1[i] = this.cartaAñadir.nombre_foto;
            break;
        }
    }

    // Desocupamos la posicion en mano
    for (var i = 0; i < posicionesLibresEnManoJug1.length; i++) {
        if (posicionesLibresEnManoJug1[i] == this.cartaAñadir.nombre_foto) {
            posicionesLibresEnManoJug1[i] = "";
            break;
        }
    }

    // TODO: cambiar listener y argumetos
    this.botonCartaAñadir = game.add.button(posicionesEnCampoJug1[posX], 300, this.cartaAñadir.nombre_foto, onClick, this, 2, 1, 0);
    this.botonCartaAñadir.scale.setTo(0.2, 0.2);
    this.botonCartaAñadir.onInputOver.add(over, {param1: this, param2: this.botonCartaAñadir});
    this.botonCartaAñadir.onInputOut.add(out, {param1: this, param2: this.botonCartaAñadir});

    botonesCampoJug1.push(this.botonCartaAñadir);

    // Eliminar boton de la mano
    for (var boton in botonesManoJug1) {
        if (botonesManoJug1[parseInt(boton)] != null && 
            botonesManoJug1[boton].key == this.cartaAñadir.nombre_foto) {

            botonesManoJug1[parseInt(boton)].kill();
            botonesManoJug1.splice(parseInt(boton), 1);
            break;
        } 
    }

    // Eliminar carta de la mano
    this.jugadorPartida.eliminarCartaMano(this.cartaAñadir);
}

function over() {
    this.param2.scale.setTo(0.33, 0.33);
}

function out() {
    this.param2.scale.setTo(0.2, 0.2);
}