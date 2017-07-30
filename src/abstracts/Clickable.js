class Clickable extends Phaser.Sprite {
  constructor(game, x, y, key) {
    super(game, x, y, key)

    this._bmd = game.make.bitmapData()
    this._bmd.load(key)
    this._bmd.replaceRGB(0, 0, 0, 255, 255, 255, 255, 255);
    this._key = key


    this.inputEnabled = true
    this.events.onInputOver.add(this.recolorOver, this)
    this.events.onInputOut.add(this.recolorOut, this)
    this.events.onInputDown.add(this.action, this)
  }

  // action() {}

  recolorOver() {
    this.loadTexture(this._bmd)
  }
  recolorOut() {
    this.loadTexture(this._key)
  }

}

export default Clickable
