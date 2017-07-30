// import Object from 'objects/Object';

class GameOver extends Phaser.State {

  create() {
    this.title = this.game.add.bitmapText(15, 75, 'panelFont', 'Game Over!', 5)
    this.title = this.game.add.bitmapText(15, 100, 'panelFont', 'You died, from exhaustion!', 5)
  }

}

export default GameOver
