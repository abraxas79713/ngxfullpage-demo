import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MnFullpageDirective, MnFullpageService  } from 'ngx-fullpage';


@NgModule({
  declarations: [
    AppComponent,
    MnFullpageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MnFullpageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
