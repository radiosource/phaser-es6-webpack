import Phaser from 'phaser'
import mixins from '../mixins';

const {constants} = require('../../config/default');

class Abstract extends Phaser.Scene {

    constructor() {
        super(...arguments);
        this._bindEventsHandlers();
    }

    init() {
        console.log(`debug## init:Abstract.js:14 -------------------------------------------------------`);
        console.log(this)
    }

    preload() {
    }

    create() {
    }

    update() {
    }
}

module.exports = mixins.attach(Abstract, mixins.withEvents);
