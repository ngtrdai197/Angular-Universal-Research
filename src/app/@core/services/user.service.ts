import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get(`${environment.API}/api/v1/user`).pipe(map(response => {
      return response;
    }), catchError(error => {
      return of(error);
    }));
  }
}
