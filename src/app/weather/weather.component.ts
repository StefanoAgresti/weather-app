import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: [],
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  currentDayForecast: any;
  forecastHours: any[] = [];

  @ViewChild(SearchBarComponent) searchBar!: SearchBarComponent;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather('Rome');
  }

  getWeather(city: string) {
    this.weatherService.getWeatherSvc(city).subscribe({
      next: (data) => {
        if (this.searchBar) {
          this.searchBar.setError(null);
        }
        this.weatherData = data;
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
        //get forecast hours for the current day
        this.forecastHours = this.currentDayForecast.hour.filter((h: any) => {
          h.time = this.weatherService.formatFcDateHourTime(h.time);
          return h.time;
        });
      },
      error: (err: any) => {
        if (err.error.error.code === 1003) {
          err.error.error.message = 'You need to type a city.';
        } else {
          this.searchBar.setError(err.error.error);
          console.log(err.error.error);
        }
      },
    });
  }
}
