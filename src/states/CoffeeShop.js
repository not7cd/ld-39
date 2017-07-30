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
      money: 100,
      damage: 0,
      timePassed: 6 * 60 * 60,
      timeToPass: 0.0
    }

    this.game.global.mS = this.game.add.audio('machineSound');
    this.game.global.sS = this.game.add.audio('sellSound');
    this.game.global.dS = this.game.add.audio('drinkSound');

    //  Being mp3 files these take time to decode, so we can't play them instantly
    //  Using setDecodedCallback we can be notified when they're ALL ready for use.
    //  The audio files could decode in ANY order, we can never be sure which it'll be.

    // this.game.sound.setDecodedCallback([mS, sS, dS], start, this);

    this.game.time.events.loop(Phaser.Timer.SECOND * 3, () => this.game.global.timeToPass += 60, this)

    let background = this.add.sprite(0, 0, 'shopBackground');
    this.machine = new Machine(this.game, 120, 0)

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

    this.game.global.customerQueue.sort('y', Phaser.Group.SORT_ASCENDING)
    this.game.global.coffeeCounter.sort('y', Phaser.Group.SORT_ASCENDING)

    // this.game.debug.text([this.game.input.x, this.game.input.y], 10, 20)

    // Win/Lose conditions
    if(this.game.global.energy < 0 || this.game.global.energy > 200 || this.game.global.money < 0 || this.game.global.timePassed > 86400) {
      this.machine.destroy()
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
      this.customerFactory.inviteCustomer(this.game, this.game.global.timePassed * Phaser.Timer.SECOND)


    }
  }
}

export default CoffeeShop
