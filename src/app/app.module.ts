import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component'

const routes:Routes=[
  {path:'',component:SearchComponent},
  {path:'about',component:AboutComponent}
]

@NgModule({
  imports:      [ BrowserModule , RouterModule.forRoot(routes), FormsModule, HttpModule ],
  declarations: [ AppComponent , NavbarComponent , AboutComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }﻿
