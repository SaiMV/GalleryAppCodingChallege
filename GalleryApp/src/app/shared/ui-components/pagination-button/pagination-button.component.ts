import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'pagination-button-stack',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.css'],
})
export class PaginationButtonComponent implements OnInit {
  @Output() selectedPage = new EventEmitter<number>();
  @Input() paginations: number = 5;
  currentPageSelected: number = 1;

  ngOnInit(): void {
    this.selectedPage.emit(this.currentPageSelected);
  }

  selectPage(page: number): void {
    this.selectedPage.emit(page);
    this.currentPageSelected = page;
  }

  previousPage(): void {
    let lastPageSelected = this.currentPageSelected;
    this.currentPageSelected =
      this.currentPageSelected > 1 ? this.currentPageSelected - 1 : 1;
    if (lastPageSelected !== this.currentPageSelected) {
      this.selectPage(this.currentPageSelected);
    }
  }

  nextPage(): void {
    let lastPageSelected = this.currentPageSelected;
    this.currentPageSelected =
      this.currentPageSelected >= this.paginations
        ? this.paginations
        : this.currentPageSelected + 1;
    if (lastPageSelected !== this.currentPageSelected) {
      this.selectPage(this.currentPageSelected);
    }
  }
}
