import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login-page.component';
import { ChooseAccountComponent } from './pages/chooseAccount/chooseAccount.component';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: '', component: ChooseAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginPage]