import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from '../user-register/user-register.component';
import {MatIconModule} from '@angular/material/icon';

const routes : Routes =[{path: '', component: UserViewComponent}]

@NgModule({
  declarations: [UserViewComponent],
  imports: [
    CommonModule, MatTableModule, MatPaginatorModule,MatSortModule,MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [UserViewComponent]
})
export class UserViewModule { }
