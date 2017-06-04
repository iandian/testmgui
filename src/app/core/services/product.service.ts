import { Observable } from 'rxjs/Rx';
import { HttpService } from './http';
import { Injectable } from '@angular/core';
import { RequestOptionsArgs } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpService) { }

  getProduct(id: string): Observable<any> {
    return this.http.get(`api/dashboard/products/${id}`)
    .map(res => res.json());
  }

  getProducts( options?: RequestOptionsArgs ): any {
    return this.http.get(`api/dashboard/products`, options)
    .map(res => res.json());
  }
}
