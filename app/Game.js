import Phaser from 'phaser'
import config from './config'
import Global from "./helpers/Global";


class Game extends Phaser.Game {
    constructor() {
        const docElement = document.documentElement;
        super(config);
        //with Cordova with need to wait that the device is ready so we will call the Boot scene in another file
        Global.game = this;
        //console.log(Global.game);
        if (!window.cordova) {
            this.changeScene(config.scene[0]);
        }
    }

    changeScene(Scene, data = {}) {
        Global.scene && this.scene.stop(Global.scene.constructor.NAME);
        this.scene.start(Scene.NAME, data);
    }
}

module.exports = Game;

