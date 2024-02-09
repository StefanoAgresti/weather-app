import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

import { GeolocationService } from '@ng-web-apis/geolocation';
import { take } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weatherData: any;
  currentDayForecast: any;
  forecastHours: any;
  error: any;
  lastUpdated!: Date;
  currPosition!: any;
  q!: any;

  constructor(
    private weatherService: WeatherService,
    private readonly geolocation$: GeolocationService
  ) {}

  ngOnInit(): void {
    console.log(this.currPosition);
  }

  getLocation() {
    this.geolocation$.pipe(take(1)).subscribe((position) => {
      console.log(position);
      this.currPosition = `${position.coords.latitude},${position.coords.longitude}`;
    });
  }

  getWeather() {
    if (this.currPosition) {
      this.q = this.currPosition;
    } else {
      this.q = this.city;
    }

    this.weatherService.getWeatherSvc(this.q).subscribe({
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

        if (this.currentDayForecast) {
          const currentTime = new Date().toLocaleTimeString('it-IT', {
            hour: 'numeric',
            minute: 'numeric',
          });

          //return the hours ahead of the current one
          this.forecastHours = this.currentDayForecast.hour.filter((h: any) => {
            h.time = this.weatherService.formatFcDateHourTime(h.time);

            return parseInt(h.time) > parseInt(currentTime);
          });
        }

        this.weatherData.current.last_updated;

        this.city = '';
        this.currPosition = '';
        console.log(this.weatherData);
      },
      error: (err: any) => {
        console.log(err.error.error);
        this.weatherData = '';
        this.city = '';

        if (err.error.error.code === 1003) {
          err.error.error.message = 'You need to type a city.';
        }
        this.error = err.error.error;
      },
    });
  }
}
