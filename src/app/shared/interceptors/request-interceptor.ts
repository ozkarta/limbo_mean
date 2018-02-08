import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the local storage.
    const token = JSON.parse(localStorage.getItem('token'));
    let headers = req.headers;
    headers = headers.append('Content-Type', 'application/json');
    // If the user is logged in, append the authorization token
    if (token != null) {
      headers = headers.append('Authorization', token);
    }
    return next.handle(req.clone({headers: headers}));
  }
}
