/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @description  Flappy Bird: Game
 * @license      Digitsensitive
 */

import 'phaser';
import { BootScene } from './scenes/bootScene';
import { MainMenuScene } from './scenes/mainMenuScene';
import { GameScene } from './scenes/gameScene';

const config: GameConfig = {
  title: 'Flappy Bird',
  url: 'https://github.com/digitsensitive/phaser3-typescript',
  version: '1.0',
  width: 405,
  height: 600,
  zoom: 1,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [BootScene, MainMenuScene, GameScene],
  input: {
    keyboard: true,
    mouse: false,
    touch: true,
    gamepad: false
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  backgroundColor: '#98d687',
  render: { pixelArt: true, antialias: false }
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.addEventListener('load', () => {
  var game = new Game(config);
});
