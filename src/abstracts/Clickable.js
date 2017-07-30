class Clickable extends Phaser.Sprite {
  constructor(game, x, y, key) {
    super(game, x, y, key)

    this._bmd = game.make.bitmapData()
    this._bmd.load(key)
    this._bmd.replaceRGB(0, 0, 0, 255, 255, 255, 255, 255);
    this._key = key

    this.inputEnabled = true
    this.input.pixelPerfectOver = true;
    this.input.useHandCursor = true;

    this.events.onInputOver.add(this.recolorOver, this)
    this.events.onInputOut.add(this.recolorOut, this)
    this.events.onInputDown.add(this.action, this)
    // this.events.onInputDown.add(this.particle, this);
  }

  // action() {}

  recolorOver() {
    this.loadTexture(this._bmd)
    // this.setType()
  }
  recolorOut() {
    this.loadTexture(this._key)
    // this.setType()
  }

  setType() {
    if(this._type) {
      this.frame = this._type
    }
  }

  addTimeToPass(time) {
    let timeToPass = (time) / (this.game.global.energy / 100)
    console.log(timeToPass);
    this.game.global.timeToPass += timeToPass
  }

  particle() {}

}

export default Clickable
