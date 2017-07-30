import Clickable from 'abstracts/Clickable'

class Customer extends Clickable {
  constructor(game, x, y, key) {
    super(game, x, y, key)

    this._energy = 3
    this._pays = 7
    this._timeCost = 1 * 60 // [s]

    this.anchor.set(0.5, 1);

    this.game.stage.addChild(this)
  }

  action() {
    this.game.global.player.moveTo(112, this.y)
    let drink = this.game.global.coffeeCounter.getFirstAlive()
    if(drink) {
      this.game.global.energy -= this._energy
      this.game.global.time += this._timeCost
      this.game.global.money += this._pays
      drink.destroy();
      this.destroy()
    }
  }
}

export default Customer
