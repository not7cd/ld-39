import Boot from 'states/Boot';
import Preloader from 'states/Preloader';

import CoffeeShop from 'states/CoffeeShop'
import GameState from 'states/GameState';


class Game extends Phaser.Game {

  constructor() {
    super(200, 150, Phaser.AUTO, 'content', null);
    this.state.add('Boot', Boot, false);
    this.state.add('Preloader', Preloader, false);
    this.state.add('CoffeeShop', CoffeeShop, false);
    this.state.add('GameState', GameState, false);
    this.state.start('Boot');
  }

}

new Game();
