import Phaser from 'phaser';
import scenes from "./scenes/"

export default {
    type: Phaser.WEBGL,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    localStorageName: 'phaseres6webpack',
    scene: [scenes.Main],

    physics: {
        default: 'arcade',
        matter: {
            debug: true
        },
        //default: 'arcade',
        arcade: {
            debug: true
        }
    }
}
