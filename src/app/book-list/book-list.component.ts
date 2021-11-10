import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  bookSubscription: Subscription = new Subscription;

  constructor(
    private router: Router,
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.bookSubscription = this.booksService.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.getBooks();
    this.booksService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book) {
    this.booksService.removeBook(book);
  }

  onViewBook(id: number) {
    // lorsque on va cliquer sur le livre dans la liste on sera naviguer vers le single 
    // book page , pas besoin de récupérer depuis la firebase puisque on a déja le
    // tableau qui contient tous les details 
    // et dans la template en a le index qui permet de savoir quel item est choisi 

    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }


}
