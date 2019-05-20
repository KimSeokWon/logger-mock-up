import { NgModule } from '@angular/core';
import {MatListModule, MatIconModule, MatButtonModule,
    MatDividerModule, MatExpansionModule,MatFormFieldModule, 
    MatInputModule, } from '@angular/material';
import { BrowserAnimationsModule }     from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: []
})
export class MaterialModule { }