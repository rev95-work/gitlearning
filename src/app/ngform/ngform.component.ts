import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NgformComponent implements OnInit {
 submit(f)
 {
   console.log(f.value);
 }
 contactmethod=[

  {
id:1, name:'rev'

  },
  
  {
    id:2, name:'rev1'
    
      }
 ];
  constructor() { }

  ngOnInit() {
  }

}
