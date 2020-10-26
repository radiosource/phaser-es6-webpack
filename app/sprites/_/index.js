import Abstract from '../Abstract'

class Sprite extends Abstract {
  #scene;
  #instance;
  body;
  _on = {};

  constructor(scene, x, y, type) {
    super(...arguments);
    this.#scene = scene;
    this.#instance = this.#scene.physics.add.image(x, y, type).setDepth(2);
    this.body = this.#instance.body;
  }

  get instance() {
    return this.#instance;
  }

}

module.exports = Sprite;
