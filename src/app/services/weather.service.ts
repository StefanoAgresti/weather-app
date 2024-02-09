import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getWeatherSvc(q: string) {
    const weather_forecast = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${q}&days=3`;

    return this.http.get(weather_forecast);
  }

  formatLocalTime(localtime: string) {
    const date = new Date(localtime);

    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
    }).format(date);
  }

  formatForecastDate(forecastDate: string) {
    const date = new Date(forecastDate);

    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
    }).format(date);
  }

  formatFcDateHourTime(time: string) {
    const date = new Date(time);

    return new Intl.DateTimeFormat('it-IT', {
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  }
}
