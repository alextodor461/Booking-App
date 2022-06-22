import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SentComponent>) { }

  ngOnInit(): void {
  }

  closeAlert(){
    this.dialogRef.close();
  }
}
