import {Component, OnInit} from '@angular/core';

import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {Account} from "../../models/account";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,private router: Router) { }

  ngOnInit() {

  }
account:Account={
  accountNumber: 200,
  balance: 5000.48,
  email: "damianjurus@wp.pl",
  firstName: "Damian",
  id: 5,
  lastName: "Juruś"
}
}
