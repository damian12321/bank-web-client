import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,private router: Router) { }
  ngOnInit(): void {
  }
  logout()
  {
    this.authenticationService.logOut()
    this.router.navigate(['/login']);
  }

}
