import {Component} from '@angular/core';
import {Account} from "../../../models/account";
import {HttpAccountsService} from "../../../services/http-accounts.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  confirmPassword: string = '';
  confirmPinNumber: number | undefined;
  pinNumbersEqual = true;
  passwordsEqual = true;
  model: Partial<Account> = {};
  isRegistered: boolean = false;
  isError: boolean = false;
  createdAccount: Account = {email: "", firstName: "", lastName: "", password: "", pinNumber: 0};
  textMessage: string = '';


  constructor(private http: HttpAccountsService,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  send() {
    this.checkFields();
    if (this.pinNumbersEqual && this.passwordsEqual) {
      this.model.pinNumber = Number(this.model.pinNumber);//convert String to Number
      this.http.postAccount(this.model as Account).subscribe(
        result => {
          console.log(result);
          this.isRegistered = true, this.createdAccount = result,
            this.textMessage = 'Your account has been succesfully created.\n<b>Your customer id is ' + result.id + '. Use this number to log in to your account.</b>'
        },
        error => {
          console.error(error), this.textMessage = 'An account with this email already exists.', this.isError = true
        }
      );
    }
  }

  checkFields() {
    this.passwordsEqual = this.model.password === this.confirmPassword;
    this.pinNumbersEqual = this.model.pinNumber == this.confirmPinNumber;
  }
}


