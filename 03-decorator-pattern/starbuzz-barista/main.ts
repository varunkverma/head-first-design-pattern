import Beverage from "./beverages/bevarge";
import Expresso from "./beverages/expresso";
import HouseBlend from "./beverages/houseblend";
import Mocha from "./condiments/mocha";
import Whip from "./condiments/whip";

function main() {
  const beverage: Beverage = new Expresso();

  console.log(`${beverage.getDescription()}: $${beverage.cost()}`);

  let bevarage2: Beverage = new HouseBlend();
  bevarage2 = new Mocha(bevarage2);
  bevarage2 = new Mocha(bevarage2);
  bevarage2 = new Whip(bevarage2);

  console.log(`${bevarage2.getDescription()}: $${bevarage2.cost()}`);
}

main();
