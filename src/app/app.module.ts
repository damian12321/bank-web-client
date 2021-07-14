import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './pages/form/login/login.component';
import {RegisterComponent} from './pages/form/register/register.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {NumericDirective} from './numeric.directive';
import {AuthModule} from "@auth0/auth0-angular";
import {AccountInfoComponent} from './pages/account-info/account-info.component';
import { LogoutComponent } from './pages/form/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    NumericDirective,
    AccountInfoComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, AppRoutingModule, HttpClientModule, AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
