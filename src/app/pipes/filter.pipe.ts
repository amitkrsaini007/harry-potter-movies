import { Pipe, PipeTransform } from '@angular/core';
import { MovieListItem } from '../interfaces/movie-list-item';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(movies: MovieListItem[], movieTitle: string, releaseYear: string): MovieListItem[] {    
    if (movieTitle && !releaseYear) {
      return movies.filter((movie: MovieListItem) =>
        movie.title.toLowerCase().includes(movieTitle.toLocaleLowerCase())
      );
    } else if (releaseYear && !movieTitle) {
      return movies.filter((movie: MovieListItem) =>
        movie.release_date
          .split('-')[0]
          .toLowerCase()
          .includes(`${releaseYear}`.toLocaleLowerCase())
      );
    } else if (movieTitle && releaseYear) {
      return movies
        .filter((movie: MovieListItem) =>
          movie.title.toLowerCase().includes(movieTitle.toLocaleLowerCase())
        )
        .filter((movie: MovieListItem) =>
          movie.release_date
            .split('-')[0]
            .toLowerCase()
            .includes(`${releaseYear}`.toLocaleLowerCase())
        );
    } else {
      return movies;
    }
  }
}

