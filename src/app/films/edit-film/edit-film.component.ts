import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FilmsService} from '../../core/services/films.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Film} from '../film';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {

  public filmForm: FormGroup;
  public film: Film;
  public filmId: string;

  constructor(private filmsService: FilmsService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.filmForm = this.formBuilder.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
      numberInStock: ['', Validators.required],
      dailyRentalRate: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.filmId = params.id);
    this.getFilmById();
    const filmId = this.filmId;

    if (!filmId) {
      alert('Invalid action.');
      this.router.navigate(['']);
      return;
    }


  }

  getFilmById() {
    this.filmsService.getFilmById(this.filmId)
      .subscribe( data => {
        this.film = data as Film;
        this.initForm(this.film);
      });
  }

  private initForm(film) {
    this.filmForm = new FormGroup({
      id: new FormControl(film.id, Validators.required),
      title: new FormControl(film.title, Validators.required),
      genre: new FormControl(film.genre, Validators.required),
      numberInStock: new FormControl(film.numberInStock, Validators.required),
      dailyRentalRate: new FormControl(film.dailyRentalRate, Validators.required),
      imageUrl: new FormControl(film.imageUrl, Validators.required),
    });
  }

  onSubmit() {
    if (this.filmForm.invalid) {
      return;
    }
    this.filmsService.updateFilm(this.filmForm.value as Film).subscribe(
      data  => {
        console.log('PUT Request is successful ', data);
      },
      error  => {
        console.log('Error', error);
      }
    );
    this.router.navigate(['/']);
  }

}
