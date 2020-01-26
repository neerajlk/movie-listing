import { Injectable } from '@angular/core';

import { BaseService } from '../http/baseService.service'

@Injectable({
    providedIn: 'root'
})
export class MovieService {


    constructor(private BaseService: BaseService) { }

    getMovies(page) {
        return this.BaseService.getData(page);
    }

    

}  