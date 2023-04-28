import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent } from '../user-view/user-view.component';


// const routes : Routes = [
//   {path: '', redirectTo: 'register', pathMatch: 'full'},
//   {path: 'register', component: UserRegisterComponent},
//   {path: 'view', component: UserViewComponent},
//   {path: '**', component: UserRegisterComponent}
// ]

const routes : Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'register', loadChildren : () => import('../user-register/user-register.module').then(m=> m.UserRegisterModule)},
  {path: 'view/:id', loadChildren : () => import('../user-view/user-view.module').then(m=> m.UserViewModule)},
  {path: '**', loadChildren : () => import('../user-register/user-register.module').then(m=> m.UserRegisterModule)}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class UserModuleModule { }
