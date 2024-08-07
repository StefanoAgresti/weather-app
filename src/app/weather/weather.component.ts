import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  city: string = 'Rome';
  weatherData: any;
  currentDayForecast: any;
  forecastHours: any;
  error: any;
  lastUpdated!: Date;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeatherSvc(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.error = false;

        //current day date format
        this.weatherData.location.localtime =
          this.weatherService.formatLocalTime(
            this.weatherData.location.localtime
          );

        //format date of each forecast day
        this.weatherData.forecast.forecastday.forEach((day: any) => {
          day.date = this.weatherService.formatForecastDate(day.date);
        });

        //find the current day
        this.currentDayForecast = this.weatherData.forecast.forecastday.find(
          (day: any) => {
            return day.date === this.weatherData.location.localtime;
          }
        );

        this.forecastHours = this.currentDayForecast.hour.filter((h: any) => {
          h.time = this.weatherService.formatFcDateHourTime(h.time);
          return h.time;
        });
        this.weatherData.current.last_updated;
        this.city = '';
      },
      error: (err: any) => {
        if (err.error.error.code === 1003) {
          err.error.error.message = 'You need to type a city.';
          this.error = err.error.error;
        } else this.error = err.error.error;

        console.log(this.error);
        this.city = '';
      },
    });
  }
}
