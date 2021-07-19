import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";
import {HttpAccountsService} from "../../../services/http-accounts.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  textMessage = '';
  isError: boolean = false;
  ngOnInit() {

  }
  id: number | undefined
  password = ''

  constructor(private router: Router,
              private loginService: AuthenticationService,private http:HttpAccountsService) {
  }

  login() {
    this.http.getAccount(this.id,this.password).subscribe(
      (data)=>{sessionStorage.setItem('account',JSON.stringify(data)),this.loginService.setPassword(this.password),
        this.router.navigate(['account'])},
      (error) => {
        switch(error.status) {
          case 401: {
            this.textMessage = 'Password or customer id is not correct.', this.isError = true;
            break;
          }
          case 423: {
            this.textMessage = 'Your account is not active. Please contact with the support.', this.isError = true;
            break;
          }
          default:
            this.textMessage = 'Something bad happened, please try again later.', this.isError = true;
        }
  })
}
}
