import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'input-form-field',
  templateUrl: 'input.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
})
export class InputForm {
  @Input() labelName: string = '';
  @Input() inputName: string = '';
  @Input() iconForm: string = '';
}
