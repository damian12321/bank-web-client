import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Account} from "../../../models/account";
import {AuthenticationService} from "../../../services/authentication.service";
import {delay, map} from "rxjs/operators";
import {async} from "rxjs";
import {HttpAccountsService} from "../../../services/http-accounts.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  textMessage = '';
  isError: boolean = false;
  // id: number | undefined;
  // password: string = '';
  model: any = {};
  private account: Account = {email: "", firstName: "", lastName: "", password: "", pinNumber: 0};

  ngOnInit() {

  }

  id: number | undefined
  password = ''
  invalidLogin = false

  constructor(private router: Router,
              private loginService: AuthenticationService) {
  }

  login() {
    const temp=this.loginService.authenticate(this.id,this.password);
    if(temp)
    {
      console.log(temp);
    }else {
      while(!temp)
      {
        console.log("!")
      }
    }
    if (this.loginService.authenticate(this.id, this.password)) {
      this.invalidLogin = false
      this.router.navigate(['/account'])
    } else {
      this.invalidLogin = true
    }
  }


}
  // login() {
  //     this.http.getAccount(this.id, this.password).subscribe(
  //       result => {
  //         this.account = result;
  //         this.sharedService.setAccount(this.account);
  //         this.router.navigate(['/account'])
  //       },
  //       error => {
  //         switch(error.status) {
  //           case 401: {
  //             this.textMessage = 'Password or customer id is not correct.', this.isError = true;
  //             break;
  //           }
  //           case 423: {
  //             this.textMessage = 'Your account is not active. Please contact with the support.', this.isError = true;
  //             break;
  //         }
  //           default:
  //             this.textMessage = 'Something bad happened, please try again later.', this.isError = true;
  //         }
  //
  //       }
  //     );
  // }

