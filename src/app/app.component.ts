import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrarianDashboardComponent } from './librarian-dashboard/librarian-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { BookService } from './services/book.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LibrarianDashboardComponent,
    CustomerDashboardComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
    BookService
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentUser: User | null = null;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getCurrentUser();
  }

  handleLoginSuccess(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  handleLogout(): void {
    this.authService.logout();
    this.currentUser = null;
  }
}
