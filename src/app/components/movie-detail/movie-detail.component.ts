import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/http/movieService.service'


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(public movieAPI: MovieService) { }

  ngOnInit() {
    this.movieAPI
  }

}
