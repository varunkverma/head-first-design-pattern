import DisplayElement from "../interfaces/display-element.interface";
import Observer from "../interfaces/observer.interface";
import WeatherData from "../weather-data";

export default class CurrentConditionsDisplay
  implements Observer, DisplayElement
{
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.temperature = 0;
    this.humidity = 0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity.`
    );
  }
}
