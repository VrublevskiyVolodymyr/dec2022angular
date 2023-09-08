import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    UserComponent,
    UsersComponent,
    UsersPageComponent,
    UserDetailsPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
