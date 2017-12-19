import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/fullpage.js/dist/jquery.fullpage.css']
})
export class AppComponent {
  menuOpened: number;

  toggleMenu(newValue: number) {
    if (this.menuOpened === newValue) {
      this.menuOpened = 0;
    } else {
      this.menuOpened = newValue;
    }
  }
}
