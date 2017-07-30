// import Object from 'objects/Object';

class GameOver extends Phaser.State {

  create() {
    let title = this.game.add.bitmapText(20, 15, 'panelFont', `GAME OVER!\n`, 5)
    let massage = this.game.add.bitmapText(15, 40, 'panelFont', ``, 5)
    let restart = this.game.add.bitmapText(15, 130, 'panelFont', 'New Game', 5)
    restart.inputEnabled = true
    restart.input.useHandCursor = true;
    restart.events.onInputDown.add(this.newGame, this)

    if(this.game.global.energy < 0) {
      massage.text = `You died from exhaustion\nBut you earned $${this.game.global.money-100}... yay!\n${this.game.global.damage} coffees drunk`
    } else if(this.game.global.energy > 2300) {
      massage.text = `You overdosed\nBut you earned $${this.game.global.money-100}... yay!\nOnly ${this.game.global.damage} coffees drunk`
    } else if(this.game.global.money < 100) {
      massage.text = `You lost all money\nYou are fired!\n${this.game.global.damage} coffees drunk\nYour live length expentancy\n after this day is ${Math.floor(16 + 80 * 1/Math.sqrt(this.game.global.damage))} years!`
    } else {
      massage.text = `You survived that day\nBut you only earned $${this.game.global.money-100}!\n${this.game.global.damage} coffees drunk\nYour live length expentancy\n after this day is ${Math.floor(16 + 80 * 1/Math.sqrt(this.game.global.damage))} years!`
    }

    this.game.global.player.destroy()
  }

  newGame() {
    this.state.start('CoffeeShop')
  }

  createButton() {
    this.levelText = this.game.add.bitmapText(0, t_sb_y + 70, 'myfont', '', 18);
    this.add(this.levelText);
    this.levelText.setText(Globals['level'].toString());
    this.levelText.inputEnabled = true;
    this.levelText.events.onInputDown.add(listener, this);

    function listener() {
      console.log('clicked');
    }
  }

}

export default GameOver
