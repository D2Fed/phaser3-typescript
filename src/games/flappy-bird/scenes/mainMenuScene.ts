/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @description  Flappy Bird: Main Menu Scene
 * @license      Digitsensitive
 */

export class MainMenuScene extends Phaser.Scene {
  private startKey: Phaser.Input.Keyboard.Key;
  private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

  constructor() {
    super({
      key: 'MainMenuScene'
    });
  }

  init(): void {
    console.log('MainMenuScene init');
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );
    this.startKey.isDown = false;
  }

  create(): void {
    console.log('MainMenuScene create');

    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 135,
        this.sys.canvas.height / 2 - 80,
        'flappyBirdFont',
        'FLAPPY BIRD',
        40
      )
    );

    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 50,
        this.sys.canvas.height / 2 - 10,
        'flappyBirdFont',
        'S: PLAY',
        30
      )
    );
  }

  update(): void {
    console.log('MainMenuScene update');

    if (this.startKey.isDown) {
      this.scene.start('GameScene');
    }
  }
}
