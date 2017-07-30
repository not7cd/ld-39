class Preloader extends Phaser.State {

  preload() {
    this.load.image('shopBackground', 'assets/images/shop.png')
    this.load.image('coffee', 'assets/images/coffee.png')
    this.load.image('machine', 'assets/images/machine1.png')
    this.load.image('player', 'assets/images/coffee-guy.png')
    this.load.image('cash', 'assets/images/cash.png')
    this.load.spritesheet('customer', 'assets/images/customers16x36.png', 16, 36)
    this.load.image('customers', 'assets/images/customers16x36.png')



    this.load.image('bottomPanel', 'assets/images/statpanel.png')
    this.load.image('energyBar', 'assets/images/energy-bar.png')
    this.load.bitmapFont('defaultFont', 'assets/fonts/font.png', 'assets/fonts/font.fnt')
    this.load.bitmapFont('panelFont', 'assets/fonts/panelFont.png', 'assets/fonts/font.fnt')
  }

  create() {
    let bmd = this.game.make.bitmapData()
    bmd.load('customer')
    bmd.replaceRGB(0, 0, 0, 255, 255, 255, 255, 255);
    this.cache.addSpriteSheet('customer_w', 'null', bmd.canvas, 16, 36)

    this.state.start('CoffeeShop')
  }
}

export default Preloader
