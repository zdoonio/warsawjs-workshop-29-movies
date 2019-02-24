import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Film} from '../film';
import {FilmsService} from '../../core/services/films.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.css']
})
export class NewFilmComponent implements OnInit {

  public filmForm: FormGroup;

  constructor(private filmsService: FilmsService, private router: Router) {  }

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
    this.filmsService.addFilm(this.filmForm.value as Film).subscribe(
      data  => {
        console.log('POST Request is successful ', data);
      },
      error  => {
        console.log('Error', error);
      }
    );
    this.router.navigate(['/']);
  }

}
