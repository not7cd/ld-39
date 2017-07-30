class StatsPanel extends Phaser.Group {
  constructor(game) {
    super(game)
    this.bottomPanel = this.game.add.sprite(0, 0, 'bottomPanel')
    this.panelText = this.game.add.bitmapText(7, 116, 'panelFont', 'Energy\nDay 1\tCash', 5)
    // this.moneyText = this.game.add.bitmapText(7 + 100, 116 + 10, 'panelFont', 'Cash: ' + this.game.global.money, 5)
    // this.dayText = this.game.add.bitmapText(7, 116 + 10, 'panelFont', 'Day: 1', 5)
    this.energyBar = this.game.add.sprite(37, 116, 'energyBar')
    this._fullEnergyBarWidth = this.energyBar.width
    this.cropRect = new Phaser.Rectangle(0, 0, this.energyBar.width, this.energyBar.height)
    this.energyBar.crop(this.cropRect)
  }

  update() {
    let timedate = new Date(this.game.global.timePassed * 1000)
    const time = timedate.toLocaleTimeString('en-US', {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC"
    })
    const day = timedate.getDate()
    // console.log(timedate.UTC())

    this.panelText.text = `Energy\nDay ${day} \t\t   Time ${time}\t\t   Cash ${this.game.global.money}`
    console.log(this.energyBar.width * this.game.global.energy / 100);
    this.cropRect.width = this._fullEnergyBarWidth * this.game.global.energy / 100
    this.energyBar.updateCrop();
  }
}

export default StatsPanel
