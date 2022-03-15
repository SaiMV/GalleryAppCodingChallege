import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageSizeOptimizer } from '../../pipes/image-size-optimizer/image-size-optimizer.pipe';
import { PaginationCreator } from '../../pipes/pagination-creator/pagination-creator.pipe';

import { PaginationButtonComponent } from './pagination-button.component';

describe('PaginationButtonComponent', () => {
  let component: PaginationButtonComponent;
  let fixture: ComponentFixture<PaginationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PaginationButtonComponent,
        PaginationCreator,
        ImageSizeOptimizer,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
