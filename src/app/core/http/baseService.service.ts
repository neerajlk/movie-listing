import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    constructor(private http: HttpClient) { }


    public url = environment.url
    public fixedParam = `?s=india&apikey=5e6ef66`
    public searchAPIParam = `?apikey=5e6ef66`



    getData(param) {
        return this.http.get(this.url + this.fixedParam + `&page=` + param);
    }

    getSearchedData(param) {
        return this.http.get(this.url + this.searchAPIParam + `&s=` + param.search + `&page=` + param.page);
    }

    getDetailsById(id) {
        return this.http.get(this.url + this.searchAPIParam + `&i=` + id);
    }
}
