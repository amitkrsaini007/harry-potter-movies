import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieListItem } from '../../interfaces/movie-list-item';
import { NgFor } from '@angular/common';
import { TimeDurationPipe } from '../../pipes/time-duration.pipe';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgFor, HttpClientModule, TimeDurationPipe, RouterLink, FormsModule,FilterPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
  providers: [HttpClientService],
})
export class MovieListComponent implements OnInit {
  moviesList: MovieListItem[] = [];
  movieTitle:string ='';
  releaseYear:string='';
  isNum:boolean=true;

  constructor(private httpClientService: HttpClientService) { }
  ngOnInit(): void {
    console.log(this.movieTitle)
    this.httpClientService.getMoviesList().subscribe({
      next: (res) => {
        this.moviesList = res;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  yearInputValidation(event: KeyboardEvent): boolean {
    const charCode = event.key;
    this.isNum = true;
    if (charCode < '0' || charCode > '9') {
      this.isNum = false;
      return false;
    }
    return true;
  }
}
