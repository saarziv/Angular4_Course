import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { AuthorsService } from './services/authors.service';
import { PostsComponent } from './posts/posts.component';
import { SectionService } from './services/section.service';
import { HomeComponent } from './home/home.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { TitlePipe } from './pipes/title.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { CoursesComponent } from './courses/courses.component';
import { TableComponent } from './table/table.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { InputFormComponent } from './input-form/input-form.component';
import { CreateCourseFormComponent } from './create-course-form/create-course-form.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    AuthorsListComponent,
    FavouriteComponent,
    TitleCasingComponent,
    TitlePipe,
    PanelComponent,
    LikeComponent,
    CoursesComponent,
    TableComponent,
    InputFormatDirective,
    ZippyComponent,
    InputFormComponent,
    CreateCourseFormComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '' , component: HomeComponent},
      {path: 'authorsList' , component: AuthorsListComponent},
      {path: 'titleCasing' , component: TitleCasingComponent},
      {path: 'favourite' , component: FavouriteComponent},
      {path: 'posts' , component: PostsComponent},
    ]),
    HttpClientModule
  ],
  providers: [
    AuthorsService, 
    SectionService, 
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
