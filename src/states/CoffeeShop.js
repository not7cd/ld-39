import Coffee from 'objects/Coffee'
import Machine from 'objects/Machine'
import Customer from 'objects/Customer'
import CustomerFactory from 'objects/CustomerFactory'

class CoffeeShop extends Phaser.State {

  create() {
    let background = this.add.sprite(0, 0, 'shopBackground');
    let machine = new Machine(this.game, 120, 0)

    this.game.global.coffeeCounter = this.game.add.group()
    this.game.global.customerQueue = this.game.add.group()

    this.customerFactory = new CustomerFactory()
    this.customerFactory.createCustomer(this.game)
    // let customer = new Customer(this.game, 20, 30, 'customer')

    // STATS
    this.energyBar = this.add.sprite(10, 130, 'energyBar')
  }
  update() {
    if(Math.random() > 0.99) {
      console.log('createCustomer')
      this.customerFactory.createCustomer(this.game)
    }
    this.game.debug.text(this.game.global.energy, 10, 20);
    this.game.debug.text(this.game.global.money, 10, 30);
    this.game.global.customerQueue.sort('y', Phaser.Group.SORT_ASCENDING);
    this.game.global.coffeeCounter.sort('y', Phaser.Group.SORT_ASCENDING);

    this.energyBar.scale.setTo(this.game.global.energy / this.game.global.maxEnergy, 1)
  }
}

export default CoffeeShop
