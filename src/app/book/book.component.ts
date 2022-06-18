import { Component, OnInit } from '@angular/core';
import countries from '../../assets/countries.json';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookDetailsComponent } from '../book-details/book-details.component';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  country: any = countries;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openBookDetails(){
    this.dialog.open(BookDetailsComponent);
  }

}
