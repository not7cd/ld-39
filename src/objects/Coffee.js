class Coffee extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'coffee');

    this._energy = 10;

    image.events.onInputDown.add(action, this);

    this.game.stage.addChild(this);
  }

  action() {
    this.global.energy += 10
  }
}

export default Coffee
