import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    { id: 'c1f12c89-e1b7-41c4-b1cf-7f7bc3f29d3b', username: 'librarian', password: 'lib123', role: 'librarian' },
    { id: 'f1e4c8a7-6f48-4d75-89df-0f3ef11efc3e', username: 'customer', password: 'cust123', role: 'customer' },
  ];

  private currentUser: User | null = null;

  login(username: string, password: string): User | null {
    const user = this.users.find(u => u.username === username && u.password === password);
    this.currentUser = user ?? null;
    return this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
