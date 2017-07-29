import Coffee from 'objects/Coffee'

class Machine extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'machine')

    this.inputEnabled = true;
    this.game.stage.addChild(this);

    this.events.onInputDown.add(this.action, this);
  }

  action() {
    this.game.global.energy -= 5;
    console.log(this.game.global.energy);
    let rectangle = new Phaser.Rectangle(80, 40, 20, 60);
    let p = new Phaser.Point()
    rectangle.random(p)
    p.floor()
    new Coffee(this.game, p.x, p.y)
  }
}

export default Machine
