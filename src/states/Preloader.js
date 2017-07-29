class Preloader extends Phaser.State {

  preload() {
    this.load.image('shopBackground', 'assets/images/shop.png')
    this.load.image('coffee', 'assets/images/coffee.png')
    this.load.image('machine', 'assets/images/machine1.png')
  }

  create() {
    this.state.start('CoffeeShop')
  }
}

export default Preloader
