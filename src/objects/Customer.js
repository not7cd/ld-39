import Clickable from 'abstracts/Clickable'

class Customer extends Clickable {
  constructor(game, x, y, type) {
    super(game, x, y, 'customer')
    this._type = type
    this._state = 0
    this._bmd = 'customer_w'
    this.setType()
    this._energy = 3
    this._pays = 7
    this._timeCost = 1 * 60 // [s]
    this._waitTime = 60 * 60
    this._enterTime = game.global.timePassed

    this.anchor.set(0.5, 1)

    this.game.stage.addChild(this)
  }

  action() {
    this.game.global.player.moveTo(112, this.y)
    this.game.global.energy -= this._energy * 0.2
    this.game.global.timeToPass += this._timeCost * 0.2
    let drink = this.game.global.coffeeCounter.getFirstAlive()
    if(drink) {
      this.game.global.energy -= this._energy
      this.game.global.timeToPass += this._timeCost
      this.game.global.money += this._pays
      drink.destroy();
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
    console.log(((this.game.global.timePassed - this._enterTime) / this._waitTime) * 100,
      Math.floor(((this.game.global.timePassed - this._enterTime) / this._waitTime) * 4));

    console.log(this._type, this._state);
    // this.loadTexture(this._bmd)
    // this.setType()
  }

  setType() {
    if(this._type) {
      this.frame = this._type + this._state
    }
  }
}

export default Customer
