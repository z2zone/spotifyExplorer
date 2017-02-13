import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , NavbarComponent , AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }﻿
