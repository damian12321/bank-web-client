import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Account} from "../models/account";

@Injectable({
  providedIn: 'root',
})
export class HttpAccountsService {
  private url = 'http://localhost:8080/api/accounts';

  constructor(private http: HttpClient) {
  }

  getAccount(): Observable<Account> {
    return this.http.get<Account>(this.url,{ observe: 'response' }).pipe(tap(console.log), catchError(this.handleError));
  }
  postAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.url, account).pipe(tap(console.log), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Name: ${error.name} \n` +
      `Message: ${error.message} \n` +
      `Returned code: ${error.status} \n`
    );
    return throwError('Something bad happened; please try again later.');
  }
}
