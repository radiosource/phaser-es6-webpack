import Abstract from '../Abstract'
const Global = require('../../helpers/Global');

class Main extends Abstract {

    constructor() {
        super({key: 'Main'});
        Global.scene = this;
        window.scene = this;
    }

    init() {
        console.log("init");
    }

    preload() {
        console.log("preload");
        this.load.setPath('../../assets/');
        this.load.image('background', 'backgrounds/default.png');
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
