import Abstract from '../Abstract'

const Global = require('../../Global');

class Main extends Abstract {

    static NAME = 'Main';

    constructor() {
        super({key: Main.NAME});
    }

    init() {
        console.log("init");
        super.init();
    }

    preload() {
        console.log("preload");
        this.load.image('background', 'assets/backgrounds/default.png');
    }

    create() {
        console.log("create");
        const {width, height} = Global.game.config;
        this.backgroung = {};
    }

    update(time) {
        //console.log("update");
    }

}

module.exports = Main;
