import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {

  constructor(private _http: Http) { }

  getInvestors(slug) {
    return this._http.get(`/assets/investors/${slug}.json`)
      .toPromise()
      .then(results => results.json())
      .catch(this.handleError);
  }

  getCategories(){
    return this._http.get(`/assets/categories.json`)
      .toPromise()
      .then(results => results.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error) //replace with something more solid later
    return Promise.reject(error.message || error);
  }
}