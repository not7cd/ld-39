import Coffee from 'objects/Coffee'
import Clickable from 'abstracts/Clickable'

class Machine extends Clickable {
  constructor(game, x, y) {
    super(game, x, y, 'machine')

    this._energyCost = 3
    this._moneyCost = 2
    this._timeCost = 5 * 60

    this.game.stage.addChild(this)
  }

  action() {
    this.game.global.player.moveTo(this.game.input.x + 20, 63)
    this.game.global.energy -= this._energyCost
    this.game.global.money -= this._moneyCost
    this.addTimeToPass(this._timeCost)

    // console.log(this.game.global.energy)
    let rectangle = new Phaser.Rectangle(85, 40, 15, 60)
    let p = new Phaser.Point()
    rectangle.random(p)
    p.floor()
    let coffee = new Coffee(this.game, p.x, p.y)
    // TODO: change this global nonsense
    this.game.global.coffeeCounter.add(coffee)
  }
}

export default Machine
