import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 form=new FormGroup(
   {
     'username':new FormControl('',Validators.required)
   }
 );

 
  constructor() { }

  ngOnInit() {
  }

}
