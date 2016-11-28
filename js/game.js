// Initialise Phaser
var game = new Phaser.Game(window.innerWidth - 20, window.innerHeight - 20, Phaser.AUTO, 'gameDiv');

// Define our 'global' variable
game.global = {
    ASSETS: 'assets/',
    jugadores: new Array(numTotalJugadores),
    entrenadores: new Array(equipos.length) 
};


// Add all the states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('menuJugar', menuJugarState);
game.state.add('play', playState);
game.state.add('reglas', reglasState);
game.state.add('creditos', creditosState);


// Start the 'boot' state
game.state.start('boot');