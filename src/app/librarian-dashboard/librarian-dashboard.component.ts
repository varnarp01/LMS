import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-librarian-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './librarian-dashboard.component.html',
  styleUrls: ['./librarian-dashboard.component.css']
})
export class LibrarianDashboardComponent {
  books!: Book[];
  newBook: Omit<Book, 'id'> = { title: '', author: '', isbn: '', available: true };
  editingBook: Book | null = null;  // Can be null
  isEditModalOpen = false;  // Flag to control modal visibility

  constructor(private bookService: BookService) {
    this.loadBooks();
  }

  private loadBooks(): void {
    console.log('Loading books...');  // Debugging log
    this.bookService.getBooks().subscribe(books => {
      console.log('Books loaded:', books);  // Debugging log
      this.books = books;
    });
  }

  onAddBook(): void {
    console.log('Adding book:', this.newBook);  // Debugging log
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.loadBooks();  // Refresh the list after adding
      this.newBook = { title: '', author: '', isbn: '', available: true };  // Reset form
    });
  }

  onEditBook(): void {
    if (this.editingBook) {
      console.log('Editing book:', this.editingBook);  // Debugging log
      this.bookService.editBook(this.editingBook.id, this.editingBook).subscribe(() => {
        this.loadBooks();  // Refresh the list after editing
        this.editingBook = null;  // Clear editing state
        this.isEditModalOpen = false;  // Close modal after editing
      });
    }
  }

  onDeleteBook(id: string): void {
    console.log('Deleting book with ID:', id);  // Debugging log
    this.bookService.deleteBook(id).subscribe(() => this.loadBooks());  // Refresh the list after deleting
  }

  setEditingBook(book: Book): void {
    console.log('Setting editing book:', book);  // Debugging log
    this.editingBook = { ...book };  // Clone the book object for editing
    this.isEditModalOpen = true;  // Open modal for editing
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
    this.editingBook = null;  // Reset editing state when modal is closed
  }

  // Getter methods for safe access in template
  get editTitle(): string {
    return this.editingBook ? this.editingBook.title : '';
  }

  set editTitle(value: string) {
    if (this.editingBook) {
      this.editingBook.title = value;
    }
  }

  get editAuthor(): string {
    return this.editingBook ? this.editingBook.author : '';
  }

  set editAuthor(value: string) {
    if (this.editingBook) {
      this.editingBook.author = value;
    }
  }

  get editIsbn(): string {
    return this.editingBook ? this.editingBook.isbn : '';
  }

  set editIsbn(value: string) {
    if (this.editingBook) {
      this.editingBook.isbn = value;
    }
  }
}
