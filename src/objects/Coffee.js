class Coffee extends Phaser.Sprite {
  constructor(game, x, y) {

    super(game, x, y, 'coffee')
    this._energy = 10;

  }
}

export default Coffee
