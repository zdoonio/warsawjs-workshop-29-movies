import { Component, OnInit } from '@angular/core';
import {Film} from '../film';
import {FilmsService} from '../../core/services/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  public name = 'Films list';
  public films: Film[] = [];
  public errorMessages = 'Cannot connect with service';
  public filmsDetailIsVisible = false;
  constructor(private filmsService: FilmsService) {}

  ngOnInit() {
    this.filmsService.getFilms().subscribe(
      films => {
        this.films = films;
      },
      error => this.errorMessages = error
    );
  }

  public toggleFilmDetails(): void {
    this.filmsDetailIsVisible = !this.filmsDetailIsVisible;
  }
}
