import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private apiBaseUrl: string = '/api/v1'
  constructor(private http: HttpClient) {}

  public registerUser(user: User): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/users/register`, user)
      .map(res => {
        return res;
      })
      .catch((error:Response|any) => {
        return Observable.throw(error);
      })
  }
}
