import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  selectedUser: string = '';

  constructor(private router: Router) {}

  login(): void {
    if (!this.selectedUser) {
      alert('Proszę wybrać imię.');
      return;
    }
    localStorage.setItem('loggedInUser', this.selectedUser);
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      this.router.navigate(['/main']);
    }
  }
}
