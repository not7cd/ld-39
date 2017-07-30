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

  update() {
    // if(!this._bounds.contains(this.x, this.y)) {
    //   this.x -= this.deltaX
    //   this.y -= this.deltaY
    // }
    if(this.game.input.mousePointer.isDown) {
      // this.moveToPointer()
    } else {
      // this.body.velocity.setTo(0, 0);
    }
    this.floorPosition()
  }

  moveTo(x, y) {
    this.x = x
    this.y = y
  }


  moveToPointer() {
    // move to pointer
    // check if is in
    // if not dont apply
    console.log(this._bounds.contains(this.x, this.y))


    if(this._bounds.contains(this.x, this.y)) {
      this.game.physics.arcade.moveToPointer(this, 100)
    } else {

      this.body.velocity.setTo(0, 0)
    }
    if(Phaser.Rectangle.contains(this.body, this.game.input.x, this.game.input.y)) {
      // this.body.velocity.setTo(0, 0);
    }

    // Move to _bounds edge

    this.floorPosition()
    console.log(this.x, this.y)
  }
  floorPosition() {
    this.x = Math.floor(this.x)
    this.y = Math.floor(this.y)
  }
}

export default Player
