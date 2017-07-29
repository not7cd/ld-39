CoffeeClick = function(game) {

  this.background = null
  this.preloaderSplash = null
  this.preloadBar = null

  this.ready = false
}

CoffeeClick.Preloader.prototype = function() {
  preload: function() {
    // this.preloaderSplash = this.add.sprite(0, 100, 'preloaderSplash')
    // this.preloaderBar = this.add.sprite(0, 100, 'preloaderBar')
    // this.load.setPreloadSprite(this.preloadBar)
    // Load thingies

  },

  create: function() {
    this.state.start('CoffeShop')
  }
}
