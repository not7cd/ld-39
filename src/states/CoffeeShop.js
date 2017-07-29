import Coffee from 'objects/Coffee'
import Machine from 'objects/Machine'

class CoffeeShop extends Phaser.State {
  create() {
    let background = this.add.sprite(0, 0, 'shopBackground');
    let coffee = new Coffee(this.game, 100, 50)
    let machine = new Machine(this.game, 120, 0)
  }
  update() {
    this.game.debug.text(this.game.global.energy, 10, 20);
  }
}

export default CoffeeShop
