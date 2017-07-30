import Coffee from 'objects/Coffee'
import Machine from 'objects/Machine'
import Player from 'objects/Player'
import CustomerFactory from 'objects/CustomerFactory'

class CoffeeShop extends Phaser.State {

  create() {
    let background = this.add.sprite(0, 0, 'shopBackground');
    let machine = new Machine(this.game, 120, 0)

    this.game.global.coffeeCounter = this.game.add.group()
    this.game.global.customerQueue = this.game.add.group()
    this.game.global.player = new Player(this.game)

    this.customerFactory = new CustomerFactory()
    this.customerFactory.createCustomer(this.game)
    // let customer = new Customer(this.game, 20, 30, 'customer')

    // STATS
    this.bottomPanel = this.add.sprite(0, 0, 'bottomPanel')
    this.energyText = this.game.add.bitmapText(7, 116, 'panelFont', 'Energy', 5)
    this.moneyText = this.game.add.bitmapText(7 + 100, 116 + 10, 'panelFont', 'Cash: ' + this.game.global.money, 5)
    this.dayText = this.game.add.bitmapText(7, 116 + 10, 'panelFont', 'Day: 1', 5)
    this.energyBar = this.add.sprite(37, 116, 'energyBar')
  }
  update() {
    if(Math.random() > 0.99) {
      console.log('createCustomer')
      this.customerFactory.createCustomer(this.game)
    }

    this.dayText.text = 'Day 1'
    // this.energyText.text = `Energy ${this.game.global.energy}`
    this.moneyText.text = `Cash ${this.game.global.money}`


    this.game.debug.text(this.game.global.energy, 10, 20);
    this.game.debug.text(this.game.global.money, 10, 30);
    this.game.global.customerQueue.sort('y', Phaser.Group.SORT_ASCENDING);
    this.game.global.coffeeCounter.sort('y', Phaser.Group.SORT_ASCENDING);

    this.energyBar.scale.setTo(this.game.global.energy / this.game.global.maxEnergy, 1)

    this.game.global.player.update()

    if(this.game.global.energy < 0) {
      this.state.start('GameOver')
    }
  }
}

export default CoffeeShop
