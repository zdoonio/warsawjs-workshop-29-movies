import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Film} from '../film';
import {FilmsService} from '../../core/services/films.service';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.css']
})
export class NewFilmComponent implements OnInit {

  public filmForm: FormGroup;

  constructor(private filmsService: FilmsService) {  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.filmForm = new FormGroup({
      title: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      numberInStock: new FormControl('', Validators.required),
      dailyRentalRate: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.filmForm.invalid) {
      return;
    }
    console.log(this.filmForm.value);
    this.filmsService.addFilm(this.filmForm.value as Film);
  }

}
