import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/product-type';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shop-params';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();
    const { brandId, typeId, sort, pageSize, pageNumber, search } = shopParams;
    if (brandId !== 0) {
      params = params.append('brandId', brandId.toString());
    }

    if (typeId !== 0) {
      params = params.append('typeId', typeId.toString());
    }

    if (search) {
      params = params.append('search', search);
    }

    params = params.append('sort', sort);
    params = params.append('pageIndex', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());

    return this.http
      .get<IPagination>(`${this.baseUrl}/products`, {
        observe: 'response',
        params,
      })
      .pipe(
        map((res) => {
          return res.body;
        })
      );
  }

  getBrands() {
    return this.http.get<IBrand[]>(`${this.baseUrl}/products/brands`);
  }

  getTypes() {
    return this.http.get<IType[]>(`${this.baseUrl}/products/types`);
  }
}
