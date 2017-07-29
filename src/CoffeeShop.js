CoffeeClick.CoffeeShop = function(game) {

}

CoffeeClick.CoffeeShop.prototype = {
  preload: function() {

  },

  create: function() {


    this.add.sprite(0, 0, 'shopBackground')

    // coffeeHoverBmp = this.make.bitmapData()
    coffee = this.add.sprite(this.rnd.integerInRange(0, this.scale.height), this.rnd.integerInRange(0, this.scale.height), 'coffeeCup')
    coffee.inputEnabled = true;
    coffee.events.onInputDown.add(coffeeDown, this)
    customer = this.add.sprite(this.rnd.integerInRange(0, this.scale.height), this.rnd.integerInRange(0, this.scale.height), 'guy')


    text = this.add.text(this.world.centerX, this.world.centerY, CoffeeClick.energy, { font: "8px Arial", fill: "#ff0044", align: "center" });
  },

  update: function() {
    text.setText("Energy " + CoffeeClick.energy);
  }
}

function coffeeDown(item) {
    console.log(CoffeeClick.energy);
    CoffeeClick.energy += 10
}
