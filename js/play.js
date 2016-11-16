// We create our only state
var playState = {
    
    create: function() {
        // Add a background image
        imgMenu = game.add.image(0, 0, 'imgMenu');
        imgMenu.scale.setTo(0.6, 0.5);

        var jugador = new Jugador();
        
        button = game.add.button(100, 100, jugadores[equipos[0]][0], onClick, this, 2, 1, 0);
        button.scale.setTo(0.3, 0.3);
        
        button.onInputOver.add(over, this);
        button.onInputOut.add(out, this);
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