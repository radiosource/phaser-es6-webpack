import Phaser from 'phaser'
import config from './config'
import mixins from "./mixins";
import Global from "./helpers/Global";
import scenes from "./scenes/"


class Game extends Phaser.Game {
    constructor() {
        const docElement = document.documentElement;
        super(config);
        //this.scene.add('Menu');
        //with Cordova with need to wait that the device is ready so we will call the Boot scene in another file
        Global.game = this;
        window._game = this;
        //console.log(Global.game);
        if (!window.cordova) {
            this.scene.start(scenes.START_SCENE.constructor.name);
        }
    }
}

module.exports = mixins.attach(Game, mixins.withEvents);

