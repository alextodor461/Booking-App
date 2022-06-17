import { Component, OnInit } from '@angular/core';
import countries from '../../assets/countries.json';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  country: any = countries;

  constructor() { }

  ngOnInit(): void {
  }

}
