import { Component } from '@angular/core';
import { InputForm } from "../../components/input.component";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  imports: [InputForm]
})
export class LoginPage {
  title = 'login';
}
