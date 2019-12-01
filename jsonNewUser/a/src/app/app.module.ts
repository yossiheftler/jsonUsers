import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FilterComponent } from './comps/filter/filter.component';
import { NaviComponent } from './comps/navi/navi.component';
import { UserComponent } from './items/user/user.component';
import { AlbumComponent } from './page/album/album.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LoginComponent } from './page/login/login.component';
import { PostsComponent } from './page/posts/posts.component';
import { UsersComponent } from './page/users/users.component';
import { TodosComponent } from './page/todos/todos.component';
import { CommentComponent } from './items/comment/comment.component';
import { PhotoComponent } from './items/photo/photo.component';
import { PostComponent } from './items/post/post.component';
import { TodoComponent } from './items/todo/todo.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LifehookComponent } from './page/lifehook/lifehook.component';
import { HookSonComponent } from './page/hook-son/hook-son.component';
import { HookGrandsonComponent } from './page/hook-grandson/hook-grandson.component';



@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    NaviComponent,
    UserComponent,
    AlbumComponent,
    HomePageComponent,
    LoginComponent,
    PostsComponent,
    UsersComponent,
    TodosComponent,
    CommentComponent,
    PhotoComponent,
    PostComponent,
    TodoComponent,
    LifehookComponent,
    HookSonComponent,
    HookGrandsonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
