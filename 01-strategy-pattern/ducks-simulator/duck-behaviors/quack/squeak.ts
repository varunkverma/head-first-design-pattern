import { QuackBehavior } from "./quack-behavior.interface";

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log("Squeak");
  }
}
