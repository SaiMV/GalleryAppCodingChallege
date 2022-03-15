import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  
  /**
   * login: method is used to sent request to server side. 
   * And once the validation is succes it navigates to home screen.
   */
  login() {
    this.router.navigate(['/home']);
  }
}
