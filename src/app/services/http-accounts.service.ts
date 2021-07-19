import {Injectable} from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from "../models/account";
import {Transaction} from "../models/transaction";

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
  getTransactions(id:number|undefined,password:string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url+id+'/'+password+'/transactions');
  }
}
