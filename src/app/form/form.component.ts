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

  /*goHome(){
    this.route.navigate(['']);
  }*/

  form = new FormGroup({
    	name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ], []),

      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ], []),

      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ], []),

      number: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+49-?)|0)?[0-9]{10}$')
      ], [])
  })

  send(){
    console.log(this.form.value)
    this.form.reset();
  }
}
