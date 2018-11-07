import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatInputModule,
  ],
  exports: [
    MatButtonModule, MatInputModule,
  ],
})
export class UiModule { }
