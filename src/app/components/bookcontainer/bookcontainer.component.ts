import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { BookObj } from 'src/assets/type';

@Component({
  selector: 'app-bookcontainer',
  templateUrl: './bookcontainer.component.html',
  styleUrls: ['./bookcontainer.component.scss']
})
export class BookcontainerComponent implements OnInit {
//  booksList: { bookID: number; bookName: string; description: string; author: string; price: number; bookImg: string; quantitys: number }[] = [];
booksList: BookObj[]=[];
  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(
      (res) => {
        // Transform the data structure to match the expected type
        this.booksList = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
