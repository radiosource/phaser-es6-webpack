import Phaser from 'phaser'
import mixins from '../mixins';

const {constants} = require('../../config/default');
const Global = require('../Global');

class Abstract extends Phaser.Scene {

    constructor() {
        super(...arguments);
    }

    init() {
        Global.scene = this;
    }

    preload() {
    }

    create() {
    }

    update() {
    }
}

module.exports = Abstract;
