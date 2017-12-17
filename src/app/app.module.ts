import { AuthorsListComponent } from './authors-list/authors-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AuthorsService } from './authors.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { TitlePipe } from './title.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsListComponent,
    FavouriteComponent,
    TitleCasingComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
