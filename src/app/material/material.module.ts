import { NgModule } from '@angular/core';
import {MatListModule, MatIconModule, MatButtonModule,
    MatDividerModule, MatExpansionModule,MatFormFieldModule, 
    MatInputModule,  MatSelectModule, MatAutocompleteModule} from '@angular/material';
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
    MatAutocompleteModule,
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
    MatAutocompleteModule,
  ],
  declarations: []
})
export class MaterialModule { }