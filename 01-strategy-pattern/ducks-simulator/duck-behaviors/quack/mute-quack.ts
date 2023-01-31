import { QuackBehavior } from "./quack-behavior.interface";

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log("...");
  }
}
