import Clickable from 'abstracts/Clickable'

class Customer extends Clickable {
  constructor(game, x, y, type) {
    super(game, x, y, 'customer')
    this._type = type
    this._state = 0
    this._bmd = 'customer_w'
    this.setType()
    this._energy = 3
    this._pays = 12
    this._timeCost = 1 * 60 // [s]
    this._waitTime = game.rnd.integerInRange(30, 90) * 60
    this._enterTime = game.global.timePassed

    this.emitter = game.add.emitter(0, 0, 100);

    this.emitter.makeParticles('cash');
    this.emitter.gravity = 200;

    this.anchor.set(0.5, 1)

    this.game.stage.addChild(this)
  }

  action() {
    this.game.global.player.moveTo(112, this.y)
    this.game.global.energy -= this._energy * 0.2
    this.addTimeToPass(this._timeCost * 0.2)
    let drink = this.game.global.coffeeCounter.getFirstAlive()
    if(drink) {
      this.game.global.energy -= this._energy
      this.addTimeToPass(this._timeCost)
      let pay = this._pays - this._state
      this.game.global.money += pay
      drink.destroy()
      this.particle(4 - this._state)
      this.destroy()

    }

  }

  update() {
    // console.log('up');
    this._state = Math.floor(((this.game.global.timePassed - this._enterTime) / this._waitTime) * 4)

    this.setType()
    if(this.game.global.timePassed - this._enterTime > this._waitTime) {
      this.destroy()
    }
  }

  recolorOver() {
    // console.log(((this.game.global.timePassed - this._enterTime) / this._waitTime) * 100,
    //   Math.floor(((this.game.global.timePassed - this._enterTime) / this._waitTime) * 4));
    // console.log(this._type, this._state);
    // console.log(this.frame);
    this.loadTexture(this._bmd)
    this.setType()
  }

  setType() {
    if(typeof this._type !== 'undefined') {
      this.frame = this._type + this._state
    }
  }

  particle(amount) {
    this.emitter.x = this.centerX;
    this.emitter.y = this.centerY;

    this.emitter.start(true, 1000, null, amount);
  }
}

export default Customer
