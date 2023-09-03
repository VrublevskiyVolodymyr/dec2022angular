import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', redirectTo: 'users', pathMatch: 'full'
      },
      {
        path: 'users', component: UsersPageComponent, children: [
          {
            path: ':id', component: UserDetailPageComponent
          }
        ]
      },
      {
        path:'posts', component:PostPageComponent
      }
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostComponent,
    PostsComponent,
    UserDetailsComponent,
    MainLayoutComponent,
    HeaderComponent,
    UserDetailPageComponent,
    PostPageComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
