export default class MainMenuScene extends Phaser.Scene {
  private startKey: Phaser.Input.Keyboard.Key;
  private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];
  constructor() {
    super({
      key: 'MainMenuScene'
    });
  }

  init() {
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );
    this.startKey.isDown = false;
  }

  create(): void {
    console.log('MainMenuScene create');

    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 125,
        this.sys.canvas.height / 2 - 80,
        'flappyBirdFont',
        'FLAPPY BIRD',
        40
      )
    );
    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 70,
        this.sys.canvas.height / 2 - 10,
        'flappyBirdFont',
        'S for Play',
        30
      )
    );
  }

  update() {
    if (this.startKey.isDown) {
      this.scene.start('GameScene');
    }
  }
}
