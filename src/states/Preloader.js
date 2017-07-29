class Preloader extends Phaser.State {

  preload() {
    this.load.image('shopBackground', 'assets/images/shop.png');
    this.load.image('coffee', 'assets/images/coffee.png');
  }

  create() {
    console.log("start new state");
    this.state.start('CoffeeShop');
  }

  update() {

  }
}

export default Preloader
