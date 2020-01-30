import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../core/http/movieService.service'
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  pageNumber: number = 1
  movies: any = []
  payload: object = { search: 'india', page: this.pageNumber }
  searchInput = new FormControl();

  constructor(public movie: MovieService) { }

  ngOnInit() {
    this.movie.getMovies(this.payload).subscribe(res => {
      this.movies = res['Search']
    })

    this.searchInput.valueChanges.pipe(debounceTime(300)).subscribe(
      res => {
        this.pageNumber = 1
        if (res.length > 0)
          this.payload = { search: res, page: this.pageNumber }
        else
          this.payload = { search: 'india', page: this.pageNumber }

        this.movie.getMovies(this.payload).subscribe(res => {
          this.movies = res['Search']
        })

      }
    )
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
      this.payload['page'] = this.pageNumber
      this.movie.getMovies(this.payload).subscribe(res => {
        this.movies = [...this.movies, ...res['Search']]
      })
    }

  }
}
