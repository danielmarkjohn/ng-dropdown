# Select Dropdown Component
The Select Dropdown Component is a reusable Angular component designed to provide a dropdown menu for selecting an option. It can be used as a child component within the Home component or any other parent component.

## Features
Displays a default placeholder text when no option is selected.
Shows a list of options when clicked, allowing the user to choose one.
Updates the selected option when an option is selected from the dropdown.
Emits an event to the parent component when the selected option changes.

## Usage
To use the Select Dropdown Component in your Home component or any other parent component:

### Import the Dropdown Component in your component's module:

import { DropdownComponent } from './dropdown.component';
Add the Dropdown Component to your component's template:


<app-dropdown [options]="dropdownOptions" (selectedOptionChange)="onOptionSelected($event)"></app-dropdown>

options: An array of objects representing the available options for selection.
(selectedOptionChange): An event binding to handle the selected option change event.

### Define the available options in your component's class:

dropdownOptions: any[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  // Add more options as needed
];

### Implement the event handler method in your component's class:

onOptionSelected(option: any) {
  // Handle the selected option change event
  console.log('Selected option:', option);
}

## Customization
The appearance of the Select Dropdown Component can be customized by modifying the CSS classes defined in the dropdown.component.css file.

.dropdown-container: The container for the dropdown component.
.dropdown: The dropdown menu container.
.selected-option: The selected option display area.
.options: The dropdown options list.
.chev-icon: The chevron icon used for the dropdown toggle.
Feel free to adjust the CSS styles as per your project's design requirements.

## Dependencies
Angular Core: ^{your_angular_version_here}
Font Awesome: ^5.15.4 (for the chevron icons)
Make sure to install and include these dependencies in your project.

