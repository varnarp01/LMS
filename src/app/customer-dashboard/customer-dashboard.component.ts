import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms'; // If you use forms
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add CommonModule here
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {
  books!: Book[];

  constructor(private bookService: BookService) {
    this.loadBooks();
  }

  private loadBooks(): void {
    this.bookService.books$.subscribe(books => {
      this.books = books;
      console.log('Books loaded in customer dashboard:', this.books); // Debugging log
    });
  }

  onBorrowBook(id: string): void {
    this.bookService.borrowBook(id).subscribe(() => {
      console.log(`Book with ID ${id} has been borrowed.`);
    });
  }

  onReturnBook(id: string): void {
    console.log(`Attempting to return book with ID: ${id}`);  // Debugging log
    this.bookService.returnBook(id).subscribe({
      next: () => {
        console.log(`Book with ID ${id} has been returned.`);
        this.loadBooks();  // Refresh the list after returning
      },
      error: (err) => console.error('Error returning book:', err)  // Log any errors
    });
  }
  
}
