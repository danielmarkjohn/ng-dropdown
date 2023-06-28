import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() options: any[] = [];
  @Output() selectedOptionChange: EventEmitter<any> = new EventEmitter<any>();
  placeholder: string = 'Select an Option';
  selectedOption: any;
  dropdownOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: any) {
    this.selectedOption = option;
    this.selectedOptionChange.emit(option);
    this.dropdownOpen = false;
  }
}
