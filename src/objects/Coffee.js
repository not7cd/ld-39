import Clickable from 'abstracts/Clickable'

class Coffee extends Clickable {
  constructor(game, x, y) {
    super(game, x, y, 'coffee')

    this._energy = 10
    this._damage = 2
    this._timeCost = 5 * 60 // s
    // this._cost = 3

    this.inputEnabled = true
    this.game.stage.addChild(this)

    this.events.onInputDown.add(this.action, this)
  }

  action() {
    this.game.global.energy += this._energy
    this.game.global.damage += this._damage
    this.game.global.time += this._timeCost
    // TODO: Pokazuj odjety koszt
    // console.log(this.game.global.energy)
    this.destroy()
  }
}

export default Coffee
