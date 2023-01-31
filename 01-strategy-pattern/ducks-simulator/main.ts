import { FlyRocketPowered } from "./duck-behaviors/fly/fly-rocket-powered";
import { Duck } from "./ducks/duck";
import { MallardDuck } from "./ducks/mallard-duck";
import { ModelDuck } from "./ducks/model-duck";

function main() {
  const mallard: Duck = new MallardDuck();

  mallard.display();
  mallard.performFly();
  mallard.performQuack();

  const model: Duck = new ModelDuck();
  model.performFly();
  model.setFlyBehaviour(new FlyRocketPowered());
  model.performFly();
}

main();
