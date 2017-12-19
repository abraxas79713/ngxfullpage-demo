import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuOpened: number;

  ngOnInit() {
    this.loadFullPage();
  }

  loadFullPage() {}

  toggleMenu(newValue: number) {
    if (this.menuOpened === newValue) {
      this.menuOpened = 0;
    } else {
      this.menuOpened = newValue;
    }
  }
}
