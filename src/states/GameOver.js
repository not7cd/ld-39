// import Object from 'objects/Object';

class GameOver extends Phaser.State {

  create() {
    let title = this.game.add.bitmapText(15, 30, 'panelFont', 'GAME OVER!\nYou died, from exhaustion!', 5)
    let restart = this.game.add.bitmapText(15, 100, 'panelFont', 'New Game', 5)
    restart.inputEnabled = true
    restart.input.useHandCursor = true;
    restart.events.onInputDown.add(this.newGame, this)

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
