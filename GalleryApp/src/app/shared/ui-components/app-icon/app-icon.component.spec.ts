import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIComponentsModule } from '../ui-components.module';

import { AppIconComponent } from './app-icon.component';

describe('AppIconComponent', () => {
  let component: AppIconComponent;
  let fixture: ComponentFixture<AppIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppIconComponent],
      imports: [UIComponentsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
