import {Component, OnInit} from '@angular/core';

import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {Account} from "../../models/account";
import {Transaction} from "../../models/transaction";
import {HttpAccountsService} from "../../services/http-accounts.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  constructor(private router: Router, private http: HttpAccountsService, private authService: AuthenticationService) {
  }

  account: Account = {email: "", firstName: "", lastName: ""};
  transactions: Transaction[] = [];

  ngOnInit() {
    this.account = JSON.parse(<string>sessionStorage.getItem('account'));
    this.http.getTransactions(this.account?.id, this.authService.getPassword()).subscribe((data) => {
      this.transactions=data;data.forEach((trans)=>trans.date=new Date());
    })
  }


}
