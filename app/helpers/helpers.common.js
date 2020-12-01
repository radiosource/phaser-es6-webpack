const constants = require('../helpers/Constants');
const Global = require('./Global');

function animate() {
    this.update() && requestAnimationFrame(animate.bind(this));
}

class CommonHelper {

    wait(time) {
        return new Promise(resolve => setTimeout(resolve, time))
    }

    tweenPromise(scene, tweenOptions) {
        return new Promise(resolve => {
            const {onComplete} = tweenOptions;
            tweenOptions.onComplete = () => resolve(onComplete && onComplete.call(tweenOptions));
            scene.tweens.add(tweenOptions)
        })
    }

    fadeIn() {
        Global.scene.cameras.main.fadeIn(constants.FADE_TIME * 1.5, ...constants.FADE_COLORS);
    }

    fadeOut() {
        Global.scene.cameras.main.fadeOut(constants.FADE_TIME, ...constants.FADE_COLORS);
        return this.wait(constants.FADE_TIME);
    }

    convertColor(htmlColorStr) {
        return (parseInt(htmlColorStr.substr(1), 16) << 8) / 256
    }

}

module.exports = new CommonHelper();
