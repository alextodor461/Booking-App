import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor( public route: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.route.navigate(['']);
  }

  form = new FormGroup({
    	name: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ], []),

      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ], []),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9_-]{8,15}$')
      ], [])
  })
}
