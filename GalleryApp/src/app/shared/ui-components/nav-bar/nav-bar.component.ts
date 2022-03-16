import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  showNavMenuBar: boolean = true;
  openNavBar: boolean = true;
  openSlider: any;

  /**
   * constructor handles routing events to remove menu items form the login screen
   */
  constructor(private router: Router) {
    this.router.events?.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (this.router?.url === '/' || this.router?.url === '/login') {
          this.showNavMenuBar = false;
        } else {
          this.showNavMenuBar = true;
        }
      }
    });
  }

  openOrCloseNavBar(close: boolean) {
    this.openNavBar = close;
    this.openSlider = close;
  }

  getClass() {
    if (this.openSlider === undefined) {
      return 'set-left';
    } else {
      return this.openSlider ? 'move-to-right' : 'move-to-left';
    }
  }
}
