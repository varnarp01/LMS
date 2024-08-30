import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  @Output() loginSuccess = new EventEmitter<void>();

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    const user = this.authService.login(this.username, this.password);
    if (user) {
      this.loginSuccess.emit();
    } else {
      alert('Invalid credentials');
    }
  }
}
