import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() color!: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'disabled';
  @Input() disabled?: boolean = false;

  @Output() onClick = new EventEmitter<void>();
}
