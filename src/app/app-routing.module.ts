import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/form/login/login.component";
import {RegisterComponent} from "./pages/form/register/register.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {AccountInfoComponent} from "./pages/account-info/account-info.component";
import {LogoutComponent} from "./pages/form/logout/logout.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountInfoComponent},
  // { path: 'account', component: AccountInfoComponent,canActivate:[AuthGuardService]  },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGuardService]  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
