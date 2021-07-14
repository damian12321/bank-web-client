import {Injectable} from '@angular/core';
import {HttpAccountsService} from "./http-accounts.service";
import {Account} from "../models/account";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private account:Account={email: "", firstName: "", lastName: "", password: "", pinNumber: 0};
private responseCode:any;
  constructor(private http:HttpAccountsService,private http1:HttpClient) { }

  authenticate(id: number | undefined, password: string) {
    return this.http.getAccount(id,password).subscribe(
      (data)=>{this.account=data,sessionStorage.setItem('account',JSON.stringify(this.account))},
      (error)=>{console.log(error),this.responseCode=error.status;return false},
      ()=>{console.log('Complete');return true});
  }

  getResponseCode() {
    return this.responseCode;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('account')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('account')
  }

}
