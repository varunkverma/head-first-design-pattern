import CurrentConditionsDisplay from "./displays/current-condition-display";
import WeatherData from "./weather-data";

function main() {
  const weatherData: WeatherData = new WeatherData();

  const currentConditionsDisplay: CurrentConditionsDisplay =
    new CurrentConditionsDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.2);
  weatherData.setMeasurements(85, 20, 50.53);
}

main();
