import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonGroupComponent),
      multi: true
    }
  ]
})
export class RadioButtonGroupComponent implements ControlValueAccessor {
  @Input() options: { id: string, value: string, label: string }[] = [];
  @Output() selectionChange = new EventEmitter<string>();

  value!: string;
  onChange!: (value: string) => void;
  onTouched!: () => void;
  disabled: boolean = false;

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelect(option: string): void {
    if (!this.disabled) {
      this.value = option;
      this.onChange(this.value);
      this.selectionChange.emit(this.value);
      this.onTouched();
    }
  }
}
