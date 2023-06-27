import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() selectedOption: any;
  @Output() selectedOptionChange: 
  EventEmitter<any> = new EventEmitter<any>();
  placeholder: string = 'Select an Option';

  constructor() {}

  ngOnInit() {}

  onOptionChange() {
    this.selectedOptionChange.emit(this.selectedOption);
  }
}
