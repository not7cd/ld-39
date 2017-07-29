class Splash extends Phaser.State {

  preload() {
    this.load.image('shopBackground', 'assets/images/shop.png')
  }

  create() {
    console.log("start new state");
    this.state.start('CoffeeShop');
  }
}

export default Splash
