import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { KavyaService } from './kavya.service';

@Component({
  selector: 'app-kavya',
  templateUrl: './kavya.component.html',
  styleUrls: ['./kavya.component.css']
})
export class KavyaComponent implements OnInit {
posts :any;

  constructor( private kavyaservice :KavyaService) {
   
   }

  
  ngOnInit() {
   this.kavyaservice.getdetails()
    .subscribe(response =>
    {
this.posts=response.json();
    },error=>
  {
    alert("unexpected error");
    console.log(error);
  });
  }



  createpost(value1 : HTMLInputElement)
  {
     let posts={
           title : value1.value
               };
     value1.value='';
    this.kavyaservice.createdetails(value1).subscribe(response=>
   {
     posts['id']=response.json().id;
     this.posts.splice(0,0,posts);
console.log(response);
   },error=>
   {
     alert("unexpected error");
     console.log(error);
   });
  }
delete(post)
{
 this.kavyaservice.deletedetails(post.id).subscribe(response=>
 { 
let index=(this.posts.indexOf(post));
this.posts.splice(1,index);
 },error=>
{
  alert("UNEXPECTED ERROR");
  console.log(error); 
});
}

}
