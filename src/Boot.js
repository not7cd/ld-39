// global variables
CoffeeClick = {

}

CoffeeClick.Boot = function (game) {
}

CoffeeClick.Boot.prototype = {
  preload: function () {
    // TODO: Loading splash
    // this.load.image('preloaderSplash','images/preloadSplash.png')
    // this.load.image('preloaderBar','images/preloadBar.png')
  },

  create: function () {
    // TODO: ScalingManager?
    // console.log('Start Preloader');
    this.state.start('Preloader')
  }
}
