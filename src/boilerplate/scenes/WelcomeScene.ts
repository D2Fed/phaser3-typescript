export default class WelcomeScene extends Phaser.Scene {
  private loadingBar: Phaser.GameObjects.Graphics;
  private progressBar: Phaser.GameObjects.Graphics;

  constructor() {
    super({
      key: 'WelcomeScene'
    });
  }

  preload() {
    this.cameras.main.setBackgroundColor(0x98d687);
    // console.log(
    //   'width,height',
    //   this.cameras.main.width,
    //   this.cameras.main.height
    // );
    this.createLoadingbar();

    this.load.on('progress', value => {
      this.progressBar.clear();
      this.progressBar.fillStyle(0xfff6d3, 1);

      this.progressBar.fillRect(
        this.cameras.main.width / 4,
        this.cameras.main.height / 2 - 16,
        (this.cameras.main.width / 2) * value,
        16
      );
    });

    this.load.on('complete', () => {
      this.progressBar.destroy();
      this.loadingBar.destroy();
    });

    this.load.pack('preload', './src/boilerplate/assets/pack.json', 'preload');
  }

  update() {
    this.scene.start('MainMenuScene');
  }

  createLoadingbar() {
    // throw new Error('Method not implemented.');
    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(0x5dae47, 1);
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      20
    );
    this.progressBar = this.add.graphics();
  }
}
