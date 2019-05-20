import { NgModule } from '@angular/core';
import {MatListModule, MatIconModule, MatButtonModule,
    MatDividerModule, MatExpansionModule,MatFormFieldModule, 
    MatInputModule,  MatSelectModule} from '@angular/material';
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
    MatSelectModule,
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
    MatSelectModule,
  ],
  declarations: []
})
export class MaterialModule { }