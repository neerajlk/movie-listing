import { Injectable } from '@angular/core';

import { BaseService } from '../http/baseService.service'

@Injectable({
    providedIn: 'root'
})
export class MovieService {


    constructor(private BaseService: BaseService) { }

    getMovies(params) {
        return this.BaseService.getData(params);
    }

    getSearchedMovies(params) {
        return this.BaseService.getData(params);
    }

    getMovieById(id) {
        return this.BaseService.getDetailsById(id);
    }


}  