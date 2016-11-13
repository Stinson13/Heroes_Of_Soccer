// We create our only state
var playState = {
    
    create: function() {
        imgFondoTablero = game.add.image(1140, 0, 'imgFondoTablero');
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
        imgDorso2.scale.setTo(0.5, 0.4);
        
    }
        
};
