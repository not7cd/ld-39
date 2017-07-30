import Customer from 'objects/Customer'

class CustomerFactory {
  constructor() {
    this.RATIO = Math.PI * 2 / (Phaser.Timer.SECOND * (24 * 60 * 60))
    this.PHASE_SHIFT = 12 * Phaser.Timer.SECOND * (60 * 60) * this.RATIO
  }



  createCustomer(game) {
    let rectangle = new Phaser.Rectangle(5, 60, 66, 40)
    let p = new Phaser.Point()
    rectangle.random(p)
    p.floor()
    // laol
    let type = 4 * game.rnd.integerInRange(0, 3)
    let customer = new Customer(game, p.x, p.y, type)
    game.global.customerQueue.add(customer)
  }

  intensity(miliseconds) {
    let time = miliseconds * this.RATIO
    let x = Math.cos(time + this.PHASE_SHIFT) * 0.4
    x += Math.cos(time * 2 + this.PHASE_SHIFT) * 0.2
    x += Math.cos(time * 4 + this.PHASE_SHIFT) * 0.2
    x = ((x + 1) / 2) / 8
    return x
  }

  inviteCustomer(game, miliseconds) {
    // console.log(this.intensity(miliseconds));
    if(Math.random() < this.intensity(miliseconds)) {
      this.createCustomer(game)
    }
  }

}

export default CustomerFactory
