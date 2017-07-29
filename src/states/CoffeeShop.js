import Coffee from 'objects/Coffee'

class CoffeeShop extends Phaser.State {
  create() {
    // let background = this.add.sprite(0, 0, 'shopBackground');
    let coffee = new Coffee(this.game, 100, 50)
  }
}

export default CoffeeShop
