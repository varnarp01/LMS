import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LibrarianDashboardComponent } from './librarian-dashboard/librarian-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

// Define routes
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'librarian', component: LibrarianDashboardComponent },
  { path: 'customer', component: CustomerDashboardComponent },
];
