import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styles: [],
})
export class WeatherInfoComponent {
  @Input() weatherData: any;
}
