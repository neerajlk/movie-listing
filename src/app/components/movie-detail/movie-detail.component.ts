import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../core/http/movieService.service'


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieId: string = ''
  movieDetails: any 

  constructor(public movieAPI: MovieService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params.id
    })

    this.movieAPI.getMovieById(this.movieId).subscribe(
      res => {
        this.movieDetails = res
      }
    )
  }

}
