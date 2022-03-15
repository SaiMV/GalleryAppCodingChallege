import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css'],
})
export class InputBoxComponent{
  @Input() type: string = '';
  @Input() placeHolder: string = '';
  @Input() inputName: String = '';

  constructor() {}

}
