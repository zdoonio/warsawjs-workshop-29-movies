import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Film} from 'src/app/films/film';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private moviesUrl = 'http://localhost:3000/movies';
  constructor(private httpClient: HttpClient) {  }

  getFilms(): Observable<Film[]> { return this.httpClient.get<Film[]>(this.moviesUrl); }


}