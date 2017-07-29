class Splash extends Phaser.State {

  preload() {
    console.log("scale");
    // this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    // this.game.scale.setUserScale(4, 4);

    // enable crisp rendering
    // this.renderer.renderSession.roundPixels = true;
    // Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
  }

  create() {
    console.log("start new state");
    this.state.start('GameState');
  }
}

export default Splash
