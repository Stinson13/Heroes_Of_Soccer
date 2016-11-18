// We create our only state
var playState = {
    
    create: function() {
        // Add a background image
        imgMenu = game.add.image(0, 0, 'imgMenu');
        imgMenu.scale.setTo(0.6, 0.5);

        this.jugador = new Jugador();
        
        button = game.add.button(100, 100, this.jugador.mazo[0].nombre_foto, onClick, this, 2, 1, 0);
        button.scale.setTo(0.3, 0.3);
        button.onInputOver.add(over, this);
        button.onInputOut.add(out, this);
        
        button1 = game.add.button(200, 100, this.jugador.mazo[1].nombre_foto, onClick, this, 2, 1, 0);
        button1.scale.setTo(0.3, 0.3);
        button1.onInputOver.add(over, this);
        button1.onInputOut.add(out, this);
        
        button2 = game.add.button(300, 100, this.jugador.mazo[2].nombre_foto, onClick, this, 2, 1, 0);
        button2.scale.setTo(0.3, 0.3);
        button2.onInputOver.add(over, this);
        button2.onInputOut.add(out, this);
        
        button3 = game.add.button(400, 100, this.jugador.mazo[3].nombre_foto, onClick, this, 2, 1, 0);
        button3.scale.setTo(0.3, 0.3);
        button3.onInputOver.add(over, this);
        button3.onInputOut.add(out, this);
    }
        
};

function onClick() {
    console.log("No me toques los cojones");
}

function over() {
    button.scale.setTo(0.4, 0.4);
}

function out() {
    button.scale.setTo(0.3, 0.3);
}