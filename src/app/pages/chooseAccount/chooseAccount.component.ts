import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'choose-account',
  templateUrl: './chooseAccount.component.html',
  standalone: true,
  imports: [RouterModule]
})
export class ChooseAccountComponent {
  constructor(private router: Router) {}
  title = 'dream-coffe';

  onLogin() {
    this.router.navigateByUrl('/login')
  }
}
