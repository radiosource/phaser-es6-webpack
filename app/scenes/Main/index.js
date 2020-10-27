import Abstract from '../Abstract'
const Global = require('../../helpers/Global');

class Main extends Abstract {

    constructor() {
        super({key: 'Main'});
    }

    init() {
        console.log("init");
        Global.scene = this;
        window._scene = this;
    }

    preload() {
        console.log("preload");
        this.load.image('background', 'assets/backgrounds/default.png');
    }

    create() {
        console.log("create");
        const {width, height} = Global.game.config;
        this.backgroung = {};
        this.backgroung.image = this
            .add.tileSprite(width / 2, height / 2, width, height, 'background')
            .setScrollFactor(0);
    }

    update(time) {
        //console.log("update");
    }

}

module.exports = Main;
