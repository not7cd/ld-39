class Coffee extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'coffee');

    this._energy = 10;

    this.inputEnabled = true;
    this.game.stage.addChild(this);

    console.log(this.events);
    this.events.onInputDown.add(() => {
      console.log('click');
    }, this);
  }

  action() {
    console.log("click");
    this.global.energy += 10
    console.log(this.global.energy);
  }
}

export default Coffee
