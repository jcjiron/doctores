import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { environment as params } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public api: string;

  constructor(
    private http: HttpClient
  ) {
    this.api = (<any>params).api.host;
  }



  /**
  * Performs any type of get Token.
  * @param none
  * @param none
  * @returns {token}
  */


  public getToken(): string {
    return localStorage.getItem('token');
  }

  /**
  * Performs any type of http request.
  * @param urlService
  * @param query
  * @returns {Response}
  */

  // tslint:disable-next-line:no-shadowed-variable
  get(urlService: string, params?: any) {

    let  getUrl = `${urlService}`;

    return this.http.get(this.api + getUrl,  {params: params});
  }

  /**
  * Performs any type of http request.
  * @param urlService
  * @param id
  * @param query
  * @returns {Response}
  */

  findOne(urlService: string, id: string) {

    let getUrl;

      getUrl = `${urlService}/${id}`;

    return this.http.get(this.api + getUrl).;
  }


  /**
  * Performs any type of http request.
  * @param urlService
  * @param data
  * @returns {Response}
  */

  post(urlService: string, data: any) {
    return this.http.post(this.api + urlService, data);
  }

  /**
  * Performs any type of http request.
  * @param urlService
  * @param id
  * @param data
  * @returns {Response}
  */

  put(urlService: string, id: string, data: any) {
    return this.http.put(this.api + `${urlService}/${id}`, data);
  }

  /**
  * Performs any type of http request.
  * @param urlService
  * @param id
  * @param data
  * @returns {Response}
  */

  patch(urlService: string, id: string, data: any) {
    return this.http.patch(this.api + `${urlService}/${id}`, data);
  }

  /**
  * Performs any type of http request.
  * @param urlService
  * @param id
  * @returns {Response}
  */


  delete(urlService: string, id: string) {
    return this.http.delete(this.api + `${urlService}/${id}`);
  }

}
