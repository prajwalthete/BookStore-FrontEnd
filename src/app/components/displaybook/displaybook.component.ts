import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataService/data.service';
import { BookObj } from 'src/assets/type';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit {
  @Input() book!: BookObj;

  @Output() bookClicked = new EventEmitter<BookObj>();
  

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  handleBookClick() {
    this.dataService.setBook(this.book);  

    // Emit the bookClicked event with the book data
   // this.bookClicked.emit(this.book);
    // Optionally, navigate to another route
    this.router.navigate(['/quickview']);
  }
}
