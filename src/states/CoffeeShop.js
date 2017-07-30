import Coffee from 'objects/Coffee'
import Machine from 'objects/Machine'
import Player from 'objects/Player'
import CustomerFactory from 'objects/CustomerFactory'
import StatsPanel from 'objects/Stats'

class CoffeeShop extends Phaser.State {

  create() {
    this.game.global = {
      maxEnergy: 100,
      energy: 100.0,
      money: 500,
      damage: 0,
      timePassed: 0.0,
      timeToPass: 0.0
    }

    this.game.time.events.loop(Phaser.Timer.SECOND * 3, () => this.game.global.timeToPass += 60, this)

    let background = this.add.sprite(0, 0, 'shopBackground');
    this.game.machine = new Machine(this.game, 120, 0)

    this.game.global.coffeeCounter = this.game.add.group()
    this.game.global.customerQueue = this.game.add.group()
    this.game.global.player = new Player(this.game)

    this.customerFactory = new CustomerFactory()
    this.customerFactory.createCustomer(this.game)
    // let customer = new Customer(this.game, 20, 30, 'customer')

    // STATS
    this.panel = new StatsPanel(this.game)


  }
  update() {
    this.passTime()

    // this.dayText.text = 'Day 1'
    // this.energyText.text = `Energy ${this.game.global.energy}`



    this.game.debug.text([this.game.input.x, this.game.input.y], 10, 20);
    // this.game.debug.text(this.game.global.money, 10, 30);
    this.game.global.customerQueue.sort('y', Phaser.Group.SORT_ASCENDING);
    this.game.global.coffeeCounter.sort('y', Phaser.Group.SORT_ASCENDING);

    // this.game.global.player.update()

    if(this.game.global.energy < 0) {
      this.state.start('GameOver')
    }
  }

  passTime() {
    const CYCLE = 60 // seconds
    let minutesPassed = 0
    while(this.game.global.timeToPass > 1) {
      // console.log(minutesPassed++)
      this.game.global.timeToPass -= CYCLE
      this.game.global.timePassed += CYCLE
      if(Math.random() > 0.9) {
        // console.log('createCustomer')
        this.customerFactory.createCustomer(this.game)
      }

    }
  }
}

export default CoffeeShop
