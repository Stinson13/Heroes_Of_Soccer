// We create our only state
var playState = {
    
    create: function() {
        // Add a background image
        imgMenu = game.add.image(0, 0, 'imgMenu');
        imgMenu.scale.setTo(0.6, 0.5);
        
        /*imgFondoTablero = game.add.image(1140, 0, 'imgFondoTablero');
        imgFondoTablero.scale.setTo(0.8, 1.0);
        imgTablero = game.add.image(195, 0, 'imgTablero');
        imgTablero.scale.setTo(0.8, 0.352);
        imgZidane = game.add.image(0, 10, 'imgZidane');
        imgZidane.scale.setTo(0.5, 0.4);
        imgCholo = game.add.image(1145, 450, 'imgCholo');
        imgCholo.scale.setTo(0.5, 0.4);
        imgDorso1 = game.add.image(1170, 250, 'imgDorso');
        imgDorso1.scale.setTo(0.5, 0.4);
        imgDorso2 = game.add.image(20, 220, 'imgDorso');
        imgDorso2.scale.setTo(0.5, 0.4);*/
        
        game.add.image(30, 30, real_madrid[0]);
        
        button = game.add.button(100, 100, 'imgZidane', onClick, this, 2, 1, 0);
        button.scale.setTo(0.3, 0.3);
        
        button.onInputOver.add(over, this);
        button.onInputOut.add(out, this);
    }
        
};

function onClick() {
    alert("No me toques los cojones");
}

function over() {
    button.scale.setTo(0.4, 0.4);
}

function out() {
    button.scale.setTo(0.3, 0.3);
}