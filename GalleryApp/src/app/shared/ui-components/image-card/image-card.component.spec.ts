import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageSizeOptimizer } from '../../pipes/image-size-optimizer/image-size-optimizer.pipe';
import { UIComponentsModule } from '../ui-components.module';

import { ImageCardComponent } from './image-card.component';

describe('ImageCardComponent', () => {
  let component: ImageCardComponent;
  let fixture: ComponentFixture<ImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageCardComponent, ImageSizeOptimizer],
      imports: [UIComponentsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
