import Observer from "./observer.interface";

export default interface Subject {
  registerObserver(o: Observer): void;
  remoteObserver(o: Observer): void;
  notifyObservers(): void;
}
