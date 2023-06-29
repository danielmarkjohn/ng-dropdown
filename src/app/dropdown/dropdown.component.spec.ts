import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the dropdown component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the placeholder text initially', () => {
    const placeholderElement = fixture.debugElement.query(
      By.css('.select-placeholder')
    );
    expect(placeholderElement.nativeElement.textContent).toBe(
      'Select an Option'
    );
  });

  it('should display the selected option after selection', () => {
    component.options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ];
    fixture.detectChanges();

    const optionElement = fixture.debugElement.query(By.css('.options li'));
    optionElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    const selectedOptionElement = fixture.debugElement.query(
      By.css('.selected-option span')
    );
    expect(selectedOptionElement.nativeElement.textContent).toBe('Option 1');
  });

  it('should emit the selected option on selection', () => {
    spyOn(component.selectedOptionChange, 'emit');
    const selectedOption = { label: 'Option 1', value: 'option1' };

    component.selectOption(selectedOption);

    expect(component.selectedOptionChange.emit).toHaveBeenCalledWith(
      selectedOption
    );
  });

  it('should toggle the dropdown visibility on click', () => {
    component.toggleDropdown();
    expect(component.dropdownOpen).toBe(true);

    component.toggleDropdown();
    expect(component.dropdownOpen).toBe(false);
  });

  it('should have the chevron-up icon when dropdown is open', () => {
    component.dropdownOpen = true;
    fixture.detectChanges();

    const chevronIconElement = fixture.debugElement.query(
      By.css('.selected-option i')
    );
    expect(chevronIconElement.nativeElement.classList).toContain(
      'fa-chevron-up'
    );
  });

  it('should have the chevron-down icon when dropdown is closed', () => {
    component.dropdownOpen = false;
    fixture.detectChanges();

    const chevronIconElement = fixture.debugElement.query(
      By.css('.selected-option i')
    );
    expect(chevronIconElement.nativeElement.classList).toContain(
      'fa-chevron-down'
    );
  });
});
