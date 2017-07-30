import Clickable from 'abstracts/Clickable'

class Customer extends Clickable {
  constructor(game, x, y, key) {
    super(game, x, y, key)

    this._energy = 3
    this._pays = 7
    this._timeCost = 1 * 60 // [s]

    this.game.stage.addChild(this)
  }

  action() {
    let drink = this.game.global.coffeeCounter.getFirstAlive()
    console.log(drink);
    if(drink) {
      this.game.global.energy -= this._energy
      this.game.global.time += this._timeCost
      this.game.global.money += this._pays
      drink.destroy();
      this.destroy()
    }
    // console.log(.RETURN_TOTAL);
    // if(this.game.global.coffeeCounter.RETURN_TOTAL !== 0) {} else {
    //   console.log('make coffee');
    // }

    // TODO: Pokazuj odjety koszt
    // console.log(this.game.global.energy)
  }
}

export default Customer
