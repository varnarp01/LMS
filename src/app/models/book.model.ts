export interface Book {
  id: string; 
  title: string;
  author: string;
  isbn: string;
  available: boolean;
  borrowedUntil?: Date;  
}
