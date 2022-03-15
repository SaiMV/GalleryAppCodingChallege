import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icons-list',
  templateUrl: './icons-list.component.html',
  styleUrls: ['./icons-list.component.css'],
})
export class IconsListComponent {
  @Input() iconName: string = '';
  @Input() iconWidth: number = 24;
  @Input() iconMargin: number = 0;
  @Input() iconHeight: number = 24;
  @Input() fillColor: string = '';
  @Input() strokeColor: string = '';

  getFillColor() {
    return this.fillColor;
  }
  getStrokeColor() {
    return this.strokeColor;
  }
}
