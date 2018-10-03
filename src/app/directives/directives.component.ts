import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
courses=[1,2];
viewMode='list';
i;
items;
onbuttonclick()
{
this.items=[
  {id:1, name:'item1'},
  {id:2, name:'item2'},
  {id:3, name:'item3'},
  ];
}
add(event)
{
 
  
  this.items.push({id:4,name:'item4'});
  event.stopImmediatePropagation();
  
}
remove(item)
{
  let index=this.items.indexOf(item);
  this.items.splice(index,1);
}
  constructor() { }

  ngOnInit() {
  }

}
