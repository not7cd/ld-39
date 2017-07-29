// // global variables
//
//
CoffeeClick = {
  energy: 100
}

CoffeeClick.Boot = function(game) {}

CoffeeClick.Boot.prototype = {
  preload: function() {

    game.global = {
      energy: 100
    }

    // TODO: Loading splash
    this.load.image('preloaderSplash', 'images/preloadSplash.png')
    this.load.image('preloaderBar', 'images/preloadBar.png')

    console.log(game);
  },

  create: function() {
    // TODO: ScalingManager?
    // scale the game 4x
    this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.scale.setUserScale(4, 4);

    // enable crisp rendering
    // this.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
    // if (this.game.device.desktop)
    // {
    //     this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //     this.scale.minWidth = 320;
    //     this.scale.minHeight = 200;
    //     this.scale.maxWidth = 800;
    //     this.scale.maxHeight = 600;
    //     this.scale.pageAlignHorizontally = true;
    //     this.scale.pageAlignVertically = true;
    //     // this.scale.setScreenSize(true);
    // }
    // else
    // {
    //     this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //     this.scale.minWidth = 480;
    //     this.scale.minHeight = 260;
    //     this.scale.maxWidth = 1024;
    //     this.scale.maxHeight = 768;
    //     this.scale.pageAlignHorizontally = true;
    //     this.scale.pageAlignVertically = true;
    //     this.scale.forceOrientation(true, false);
    //     this.scale.hasResized.add(this.gameResized, this);
    //     this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
    //     this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
    //     this.scale.setScreenSize(true);
    // }


    // console.log('Start Preloader');
    this.state.start('Preloader')
  },

  // gameResized: function(width, height) {},
  //
  // enterIncorrectOrientation: function() {
  //
  //   CoffeeClick.orientated = false
  //
  //   document.getElementById('orientation').style.display = 'block';
  //
  // },
  //
  // leaveIncorrectOrientation: function() {
  //
  //   CoffeeClick.orientated = true
  //
  //   document.getElementById('orientation').style.display = 'none';
  //
  // }
}
