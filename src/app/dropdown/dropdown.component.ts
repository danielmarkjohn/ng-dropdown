import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() options: any[] = [];
  @Output() selectedOptionChange: EventEmitter<any> = new EventEmitter<any>();
  placeholder = 'Select an Option';
  selectedOption: any;
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: any) {
    this.selectedOption = option;
    this.selectedOptionChange.emit(option);
    this.dropdownOpen = false;
  }

  getChevronIconClass() {
    return this.dropdownOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  }
}
