import Boot from 'states/Boot';
import Preloader from 'states/Preloader';

import CoffeeShop from 'states/CoffeeShop'
import GameOver from 'states/GameOver';


class Game extends Phaser.Game {

  constructor() {
    super(200, 150, Phaser.AUTO, 'content', null);
    this.state.add('Boot', Boot, false);
    this.state.add('Preloader', Preloader, false);
    this.state.add('CoffeeShop', CoffeeShop, false);
    this.state.add('GameOver', GameOver, false);
    this.state.start('Boot');
  }

}

new Game();
