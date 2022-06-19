import { Component, OnInit } from '@angular/core';
import countries from '../../assets/countries.json';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  
  constructor(public dialog: MatDialog, public service: ServiceService) { }

  ngOnInit(): void {
    this.service.countries;
  }

  openBookDetails(){
    this.dialog.open(BookDetailsComponent);
  }
}
