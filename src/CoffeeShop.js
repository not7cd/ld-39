CoffeeClick.CoffeeShop = class {
  constructor(game) {

  }
  preload () {}
  create () {
    this.add.sprite(0, 0, 'shopBackground')

    // coffeeHoverBmp = this.make.bitmapData()
    this.coffee = this.add.sprite(this.rnd.integerInRange(0, this.scale.height), this.rnd.integerInRange(0, this.scale.height), 'coffeeCup')
    this.coffee.inputEnabled = true;
    this.coffee.events.onInputDown.add(coffeeDown, this)
    this.customer = this.add.sprite(this.rnd.integerInRange(0, this.scale.height), this.rnd.integerInRange(0, this.scale.height), 'guy')
  }
  update () {}

}


// CoffeeClick.CoffeeShop = function(game) {
//
// }
//
// CoffeeClick.CoffeeShop.prototype = {
//   preload: function() {
//
//   },
//
//   create: function() {
//
//
//     this.add.sprite(0, 0, 'shopBackground')
//
//     // coffeeHoverBmp = this.make.bitmapData()
//     coffee = this.add.sprite(this.rnd.integerInRange(0, this.scale.height), this.rnd.integerInRange(0, this.scale.height), 'coffeeCup')
//     coffee.inputEnabled = true;
//     coffee.events.onInputDown.add(coffeeDown, this)
//     customer = this.add.sprite(this.rnd.integerInRange(0, this.scale.height), this.rnd.integerInRange(0, this.scale.height), 'guy')
//
//   },
//
//   update: function() {
//     game.debug.text("E " + game.global.energy, 10, 20);
//   }
// }

function coffeeDown(item) {
    // console.log(CoffeeClick.energy);
    game.global.energy += 10
}
