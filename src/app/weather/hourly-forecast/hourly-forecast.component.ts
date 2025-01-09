import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styles: [],
})
export class HourlyForecastComponent {
  @Input() forecastHours!: any[];
}
