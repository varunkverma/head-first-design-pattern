import { FlyBehavior } from "./fly-behavior.interface";

export class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log("I'm flying!");
  }
}
