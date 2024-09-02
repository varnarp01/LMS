
# Library Management System (Angular Frontend)

This project is an Angular-based front-end application for managing a library system. It provides user interfaces for both librarians and customers to manage books, borrow books, and return them.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Components](#components)
- [Services](#services)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Library Management System is a front-end application built with Angular. It allows librarians to add, edit, and delete books and manage their availability. Customers can view available books and borrow or return them.

## Prerequisites

- **Node.js and npm**: Ensure that Node.js and npm are installed on your machine. You can download them from the [official website](https://nodejs.org/).
- **Angular CLI**: Install Angular CLI globally using npm:

  ```bash
  npm install -g @angular/cli
  ```

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/varnarp01/LMS
   cd LMS
   ```

2. **Install project dependencies**:

   ```bash
   npm install
   ```

## Running the Application

To run the application in development mode:

```bash
ng serve
```

The application will be accessible at `http://localhost:4200`.

## Project Structure

The project is organized into several key components and services:

```
src/
├── app/
│   ├── components/
│   │   ├── app.component.ts
│   │   ├── librarian-dashboard/
│   │   ├── customer-dashboard/
│   │   └── login/
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── book.service.ts
│   └── models/
│       ├── book.model.ts
│       └── user.model.ts
└── ...
```

## Components

### AppComponent

- **Purpose**: The root component that initializes the application and handles high-level navigation and state management.
- **Key Features**:
  - Initializes the application.
  - Contains the logic to switch between librarian and customer views based on the user's role.

### LibrarianDashboardComponent

- **Purpose**: Allows librarians to manage books in the library.
- **Key Features**:
  - Add new books to the library.
  - Edit details of existing books.
  - Delete books from the library.

### CustomerDashboardComponent

- **Purpose**: Allows customers to view available books and manage their borrowed books.
- **Key Features**:
  - View available books in the library.
  - Borrow a book.
  - Return a borrowed book.

### LoginComponent

- **Purpose**: Handles user authentication.
- **Key Features**:
  - Provides a login form for users to authenticate.
  - Validates user credentials using the `AuthService`.

## Services

### AuthService

- **Purpose**: Handles authentication and authorization.
- **Key Features**:
  - Login: Authenticates users based on their credentials.
  - Logout: Clears the current user session.
  - Get Current User: Returns the currently authenticated user.

### BookService

- **Purpose**: Handles all book-related operations.
- **Key Features**:
  - Get Books: Fetches the list of books from the backend API.
  - Add Book: Sends a request to add a new book.
  - Edit Book: Sends a request to edit a book's details.
  - Delete Book: Sends a request to delete a book.
  - Borrow Book: Sends a request to borrow a book.
  - Return Book: Sends a request to return a book.

## API Integration

The Angular frontend integrates with the .NET API backend running on `http://localhost:5009`. The services (`auth.service.ts` and `book.service.ts`) are configured to communicate with the backend API endpoints.

### Example API Calls

**Fetch All Books**:

```typescript
getBooks(): Observable<Book[]> {
  return this.http.get<Book[]>('http://localhost:5009/api/books');
}
```

**Borrow a Book**:

```typescript
borrowBook(id: string): Observable<void> {
  return this.http.patch<void>(`http://localhost:5009/api/books/${id}/borrow`, {});
}
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
