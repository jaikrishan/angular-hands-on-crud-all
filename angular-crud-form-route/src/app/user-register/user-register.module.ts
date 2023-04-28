import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

const routes : Routes =[{path: '', component: UserRegisterComponent}]
@NgModule({
  declarations: [UserRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [UserRegisterComponent]
})
export class UserRegisterModule { }
