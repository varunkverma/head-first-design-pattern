import { QuackBehavior } from "./quack-behavior.interface";

export class Quack implements QuackBehavior {
  quack(): void {
    console.log("Quack");
  }
}
