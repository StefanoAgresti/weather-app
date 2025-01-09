import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
})
export class SearchBarComponent {
  city: string = '';
  error: any;

  @Output() searchCity = new EventEmitter<string>();

  onSubmit() {
    this.searchCity.emit(this.city);
    this.city = '';
  }

  setError(error: any) {
    this.error = error;
  }
}
