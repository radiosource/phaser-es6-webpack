import Phaser from 'phaser';
import scenes from "./scenes/"
import GesturesPlugin from 'phaser3-rex-plugins/plugins/gestures-plugin.js';

export default {
    type: Phaser.WEBGL,
    width: window.innerWidth,// * window.devicePixelRatio,
    height: window.innerHeight,// * window.devicePixelRatio,
    localStorageName: 'phaseres6webpack',
    scene: [
        scenes.Main
    ],

    plugins: {
        scene: [{
            key: 'rexGestures',
            plugin: GesturesPlugin,
            mapping: 'rexGestures'
        }]
    },

    physics: {
        default: 'matter',
        matter: {
            debug: true
        },
        //default: 'arcade',
        arcade: {
            debug: true
        }
    }
}
