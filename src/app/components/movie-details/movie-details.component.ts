import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClientService } from '../../services/http-client.service';
import { MovieDetails } from '../../interfaces/movie-details';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { TimeDurationPipe } from '../../pipes/time-duration.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [HttpClientModule, NgFor, NgIf, TimeDurationPipe, RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
  providers:[HttpClientService]
})
export class MovieDetailsComponent implements OnInit {
  movieDetails!: MovieDetails;
  constructor(private activatedRoute:ActivatedRoute, private httpclientService:HttpClientService){ 
    //this.routeId = this.route.snapshot.params['id'];
    
    
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['movieId'];
    this.httpclientService.getMovieDetails(id).subscribe({
      next:(res)=>{
        this.movieDetails = res;
        
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
