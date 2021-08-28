import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TestErrorService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get404Error() {
    return this.http.get(`${this.baseUrl}/products/500`);
  }

  get500Error() {
    return this.http.get(`${this.baseUrl}/buggy/servererror`);
  }

  get400Error() {
    return this.http.get(`${this.baseUrl}/buggy/badrequest`);
  }

  get400ValidationError() {
    return this.http.get(`${this.baseUrl}/buggy/badrequest/five`);
  }
}
