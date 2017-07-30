class Player extends Phaser.Sprite {
  constructor(game) {
    super(game, 150, 50, 'player')


    this.game.physics.enable(this, Phaser.Physics.ARCADE)
    this._bounds = new Phaser.Rectangle(100, 40, 40, 60)
    // let debug = game.add.graphics(this._bounds.x, this._bounds.y);
    // debug.beginFill(0x000077);
    // debug.drawRect(0, 0, this._bounds.width, this._bounds.height);

    this.x = this._bounds.centerX
    this.y = this._bounds.centerY

    this.inputEnabled = true;
    this.anchor.set(0.5, 1);

    // this.input.enableDrag();
    this.input.boundsRect = this._bounds

    this.game.stage.addChild(this)
  }

  // update() {}

  moveTo(x, y) {
    this.x = x
    this.y = y
    this.floorPosition()
  }

  floorPosition() {
    this.x = Math.floor(this.x)
    this.y = Math.floor(this.y)
  }
}

export default Player
