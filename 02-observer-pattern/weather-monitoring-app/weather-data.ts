import Observer from "./interfaces/observer.interface";
import Subject from "./interfaces/subject.interface";

export default class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
    this.humidity = 0;
    this.temperature = 0;
    this.pressure = 0;
  }

  getTemperature(): number {
    return this.temperature;
  }

  getHumidity(): number {
    return this.humidity;
  }

  getPressure(): number {
    return this.pressure;
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  remoteObserver(o: Observer): void {
    this.observers = this.observers.filter((ob) => ob !== o);
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update();
    }
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }
}
