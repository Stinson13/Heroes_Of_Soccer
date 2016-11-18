// We create our only state
var playState = {
    
    create: function() {
        // Add a background image
        imgMenu = game.add.image(0, 0, 'imgMenu');
        imgMenu.scale.setTo(0.6, 0.5);

        this.jugador1 = new Jugador();
        this.jugador2 = new Jugador();
        
        this.partida = new Partida (this.jugador1, this.jugador2);
        
        this.jugador1.robar(this.jugador1, this.jugador1.mazo[0]);
        this.jugador1.bajarCarta(this.jugador1, this.jugador1.mano[0]);
        
    }
        
};