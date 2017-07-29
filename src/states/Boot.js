class Boot extends Phaser.State {
  preload() {
    // Set 4x the scale
    this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.game.scale.setUserScale(4, 4);

    // Enable crisp rendering
    // this.game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
  }

  create() {
    this.state.start('Splash')
  }
}
export default Boot
