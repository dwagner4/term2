import * as THREE from 'three';
import World from '../systems/World.js';

import HeartScenery from '../scenery/HeartScenery.js';
import NorthTerminal from '../actors/NorthTerminal.js';

export default class OneWorld extends World {
  constructor(stage) {
    super(stage);

    this.stage.camera.position.set(0, 30, 150);
    this.stage.scene.background = new THREE.Color(0x493000);

    const hrtBgrd = new HeartScenery();
    this.hemi = hrtBgrd.hemilight;
    this.light = hrtBgrd.light;
    this.plane = hrtBgrd.plane;
    this.plane.material.color = new THREE.Color(0x448844);
    const scalar = new THREE.Matrix4().makeScale(50, 50, 50);
    this.plane.applyMatrix4(scalar);
    this.stage.scene.add(this.hemi, this.light, this.plane);

    this.heart = {};
    this.sphere = {};
  }

  async init() {
    await super.init();

    this.term = new NorthTerminal();
    await this.term.init();
    this.term.model.position.set(392, -126, 740);
    console.log(this.term);
    this.stage.scene.add(this.term.model);
  }

  update(time) {
    super.update(time);
  }

  dispose() {
    this.stage.disableVR();
    this.heart.dispose();
    this.heart.model.removeFromParent();
    this.hemi.removeFromParent();
    this.light.removeFromParent();
    this.plane.geometry.dispose();
    this.plane.material.dispose();
    this.plane.removeFromParent();
    this.sphere.dispose();
    this.sphere.model.removeFromParent();
  }
}
