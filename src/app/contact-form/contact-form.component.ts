import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
log(x)
{
  console.log(x);
}
comment(y)
{
  console.log(y);
}
  constructor() { }

  ngOnInit() {
  }

}
