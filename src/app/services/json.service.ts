import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {

  private _url = '/assets/accel_partners.json';
  constructor(private _http: Http) { }
  getJson() {
    return this._http.get(this._url)
      .toPromise()
      .then(results => results.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error) //replace with something more solid later
    return Promise.reject(error.message || error);
  }
}
