import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { routes } from '../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { UIComponentsModule } from 'src/app/shared/ui-components/ui-components.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule.withRoutes(routes), UIComponentsModule],
      providers: [{ provide: Router, useValue: router }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create UI', () => {
    expect(component).toBeTruthy();
  });

  it('should have login text in the UI', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const welcomeText = compiled.querySelector('h1')?.textContent;

    expect(welcomeText).toBe('LOGIN');
  });

  it('should navigate to home screen on button click', () => {
    let submitButton: DebugElement = fixture.debugElement.query(
      By.css('input[type=submit]')
    );
    fixture.detectChanges();
    submitButton.triggerEventHandler('click', null);
    console.log(submitButton);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
