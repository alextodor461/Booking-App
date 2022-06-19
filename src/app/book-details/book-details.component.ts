import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  open() {
    throw new Error('Method not implemented.');
  }

  constructor(public service: ServiceService) { }

  ngOnInit(): void {
  }
}
