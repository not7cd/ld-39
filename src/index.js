import Splash from 'states/Splash';
import GameState from 'states/GameState';

class Game extends Phaser.Game {

  constructor() {
    super(200, 150, Phaser.AUTO, 'content', null);
    this.state.add('Splash', Splash, false);
    this.state.add('GameState', GameState, false);
    this.state.start('Splash');
  }

}

new Game();
