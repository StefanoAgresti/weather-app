import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './weather/search-bar/search-bar.component';
import { WeatherInfoComponent } from './weather/weather-info/weather-info.component';
import { DailyForecastComponent } from './weather/daily-forecast/daily-forecast.component';
import { HourlyForecastComponent } from './weather/hourly-forecast/hourly-forecast.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, SearchBarComponent, WeatherInfoComponent, DailyForecastComponent, HourlyForecastComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
