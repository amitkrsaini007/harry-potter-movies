import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieListItem } from '../interfaces/movie-list-item';
import { MovieDetails } from '../interfaces/movie-details';

@Injectable()
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getMoviesList(){
    return this.httpClient.get<MovieListItem[]>('/movies');
  }
  getMovieDetails(id: string){
    return this.httpClient.get<MovieDetails>(`/movies/${id}`);
  }

}
