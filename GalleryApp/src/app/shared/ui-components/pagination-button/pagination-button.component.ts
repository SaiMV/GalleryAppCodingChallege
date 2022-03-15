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

  /**
   * ngOnInit: Emit first page index. It may be help ful to set values
   *  or to fetch data from server
   */
  ngOnInit(): void {
    this.selectedPage.emit(this.currentPageSelected);
  }

  /**
   * selectPage: Emit selected page index. It may be
   *  help ful to set values or fetch data from server. 
   * current page selected will be kept for previous and next button
   * actions.
   */
  selectPage(page: number): void {
    this.selectedPage.emit(page);
    this.currentPageSelected = page;
  }

  /**
   * previousPage: method decrement the current selected value  by 1 unti c
   * urrent selected value reaches 1 by each 
   */
  previousPage(): void {
    let lastPageSelected = this.currentPageSelected;
    this.currentPageSelected =
      this.currentPageSelected > 1 ? this.currentPageSelected - 1 : 1;
    if (lastPageSelected !== this.currentPageSelected) {
      this.selectPage(this.currentPageSelected);
    }
  }

  /**
   * previousPage: method decrement the current selected value  by 1 unti c
   * urrent selected value reaches maximum pagination index by each 
   */
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
