import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { FilmDetailsComponent } from './films/films-list/film-details/film-details.component';
import { NewFilmComponent } from './films/new-film/new-film.component';
import { MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routings.modules';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    FilmDetailsComponent,
    NewFilmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
