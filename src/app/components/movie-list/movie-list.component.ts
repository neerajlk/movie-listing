import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../core/http/movieService.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  pageNumber: number = 1
  movies: any = []
  constructor(public movie: MovieService) { }

  ngOnInit() {
    // this.movies = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
    this.movie.getMovies(this.pageNumber).subscribe(res => {
      this.movies = res['Search']
    })
  }

  onScroll(event) {
    const tableViewHeight = event.target.offsetHeight; // viewport: ~500px
    const tableScrollHeight = event.target.scrollHeight; // length of all table
    const scrollLocation = event.target.scrollTop; // how far user scrolled
    // If the user has scrolled within 200px of the bottom, add more data
    const buffer = 0;
    const limit = tableScrollHeight - tableViewHeight - buffer;

    if (scrollLocation >= limit) {
      this.pageNumber += 1
      this.movie.getMovies(this.pageNumber).subscribe(res => {
        this.movies = [...this.movies,...res['Search']]
      })
    }

  }
}
