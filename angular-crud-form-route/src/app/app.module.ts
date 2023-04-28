import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserPipePipe } from './user-pipe.pipe';
import { UserDirDirective } from './user-dir.directive';
import { UserRegisterModule } from './user-register/user-register.module';
import { UserViewModule } from './user-view/user-view.module';
import { UserModuleModule } from './user-module/user-module.module';
// import { UserFormFormArrComponent } from './user-form-form-arr/user-form-form-arr.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPipePipe,
    UserDirDirective,
    // UserFormFormArrComponent,
    // UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UserRegisterModule,
    UserViewModule,
    UserModuleModule
  ],
  providers: [],
  // entryComponents : [UserRegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
