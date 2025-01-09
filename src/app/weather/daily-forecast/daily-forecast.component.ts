import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styles: [],
})
export class DailyForecastComponent {
  @Input() weatherData: any;
}
