import { createGlbLoader } from '../systems/Loader.js';
import Actor from '../systems/Actor.js';

export default class NorthTerminal extends Actor {
  async init() {
    const glbloader = createGlbLoader();
    const [nTermData] = await Promise.all([
      glbloader.loadAsync('/assets/models/terminal_test2-yescomp-noanim.glb'),
    ]);

    console.log(nTermData);

    const mymodel = nTermData.scene;

    console.log(mymodel);
    this.model = mymodel;
  }
}
