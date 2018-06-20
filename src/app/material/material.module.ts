import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [MatToolbarModule],
  declarations: []
})
export class MaterialModule { }
