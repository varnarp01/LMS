import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Book } from '../models/book.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly apiUrl = 'http://localhost:5009/api/books';
  private booksSubject = new BehaviorSubject<Book[]>([]);
  books$ = this.booksSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData(): void {
    this.getBooks().subscribe(books => this.booksSubject.next(books));
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl).pipe(
      tap(books => {
        console.log('Fetched books:', books); // Debugging log
        this.booksSubject.next(books);
      })
    );
  }

  addBook(book: Omit<Book, 'id'>): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book).pipe(
      tap(() => this.loadInitialData())  // Refresh the data after adding a book
    );
  }

  editBook(id: string, book: Partial<Book>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, book).pipe(
      tap(() => this.loadInitialData())  // Refresh the data after editing a book
    );
  }

  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.loadInitialData())  // Refresh the data after deleting a book
    );
  }

  borrowBook(id: string): Observable<void> {  // New method to borrow a book
    return this.http.patch<void>(`${this.apiUrl}/Borrow/${id}`, {}).pipe(
      tap(() => this.loadInitialData())  // Refresh the data after borrowing a book
    );
  }

  returnBook(id: string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/Return/${id}`, {}).pipe(
      tap(() => this.loadInitialData())  // Refresh the data after returning a book
    );
  }
}
