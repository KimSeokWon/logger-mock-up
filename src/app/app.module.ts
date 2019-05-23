import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoggerListComponent } from './logger/logger-list/logger-list.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, LoggerListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
