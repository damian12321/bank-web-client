import {Injectable} from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from "../models/account";

@Injectable({
  providedIn: 'root',
})
export class HttpAccountsService {
  private url = 'http://localhost:8080/api/accounts/';

  constructor(private http: HttpClient) {
  }

  getAccount(id:number|undefined,password:string): Observable<Account> {
    return this.http.get<Account>(this.url+id+'/'+password);
  }
  postAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.url, account);
  }

}
