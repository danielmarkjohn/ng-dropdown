import { Component } from '@angular/core';
import { DROPDOWN_OPTIONS } from './home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  dropdownOptions = DROPDOWN_OPTIONS;
  selectedDropdownOption: any;

  onDropdownOptionChange(option: any) {
    console.log('Selected option:', option);
  }
}
