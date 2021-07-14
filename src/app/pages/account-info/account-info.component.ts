import {Component, OnInit} from '@angular/core';
import {Account} from "../../models/account";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  account: Account = {
    accountNumber: 0,
    balance: 0,
    email: "",
    firstName: "",
    id: 0,
    isActive: false,
    lastName: "",
    loginAttempts: 0,
    password: "",
    pinNumber: 0,
    transactionList: []
  };

  constructor(private loginService:AuthenticationService) { }

  ngOnInit() {

  }

  // ngOnInit(): void {
    // if(this.sharedService.getAccount().id===undefined)
    // {
    //   this.router.navigate(['/logout'])
    //   return;
    // }
  //   this.account=this.sharedService.getAccount();
  // }

}
