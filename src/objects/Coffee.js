import Clickable from 'abstracts/Clickable'

class Coffee extends Clickable {
  constructor(game, x, y) {
    super(game, x, y, 'coffee')

    this._energy = 13
    this._damage = 1
    this._timeCost = 10 * 60 // [s]
    // this._cost = 3

    this.game.stage.addChild(this)
  }

  action() {
    this.game.global.dS.play()
    this.game.global.player.moveTo(112, this.y + 20)
    this.game.global.energy += this._energy
    this.game.global.damage += this._damage
    this.addTimeToPass(this._timeCost)
    // TODO: Pokazuj odjety koszt
    // console.log(this.game.global.energy)
    this.destroy()
  }
}

export default Coffee
