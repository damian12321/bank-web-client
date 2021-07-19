import {Injectable} from '@angular/core';
import {HttpAccountsService} from "./http-accounts.service";
import {Account} from "../models/account";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private account:Account={email: "", firstName: "", lastName: "", password: "", pinNumber: 0};
private responseCode:any;
  constructor(private http:HttpAccountsService) { }
private password='';
  setPassword(password:string)
  {
    this.password=password;
  }
  getPassword()
  {
    return this.password;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('account')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('account')
  }

}
