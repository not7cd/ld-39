import Coffee from 'objects/Coffee'
import Machine from 'objects/Machine'

class CoffeeShop extends Phaser.State {

  create() {
    let background = this.add.sprite(0, 0, 'shopBackground');
    // let coffee = new Coffee(this.game, 100, 50)
    let machine = new Machine(this.game, 120, 0)

    this.game.global.coffeeCounter = this.game.add.group()

    // STATS
    this.energyBar = this.add.sprite(10, 130, 'energyBar')
  }
  update() {
    this.game.debug.text(this.game.global.energy, 10, 20);
    this.game.debug.text(this.game.global.money, 10, 30);
    this.game.global.coffeeCounter.sort('y', Phaser.Group.SORT_ASCENDING);

    this.energyBar.scale.setTo(this.game.global.energy / this.game.global.maxEnergy, 1)
  }
}

export default CoffeeShop
