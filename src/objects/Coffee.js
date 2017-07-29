class Coffee extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'coffee');

    this._energy = 10;

    this.inputEnabled = true;
    this.game.stage.addChild(this);

    this.events.onInputDown.add(this.action, this);
  }

  action() {
    // console.log("click");
    this.game.global.energy += 10;
    console.log(this.game.global.energy);
    this.destroy();
  }
}

export default Coffee
