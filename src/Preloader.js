// "use strict";

CoffeeClick.Preloader = function(game) {

  this.background = null
  this.preloaderSplash = null
  this.preloadBar = null

  this.ready = false
}

CoffeeClick.Preloader.prototype = {
  preload: function() {
    this.preloaderSplash = this.add.sprite(0, 100, 'preloaderSplash')
    this.preloaderBar = this.add.sprite(0, 100, 'preloaderBar')
    this.load.setPreloadSprite(this.preloaderBar)
    // Load thingies
    this.load.image('shopBackground', 'images/shop.png')
    this.load.image('coffeeCup', 'images/coffee.png')
    this.load.image('guy', 'images/guy.png')
  },

  create: function() {
    this.state.start('CoffeeShop')
  },

  update: function() {

  }
}
