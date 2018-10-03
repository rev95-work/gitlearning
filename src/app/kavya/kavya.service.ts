import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class KavyaService {
  private url="http://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http) { }


  getdetails()
  {
 return this.http.get(this.url);
  }
createdetails(value1)
{
  return this.http.post(this.url,JSON.stringify(value1));
}
deletedetails(value)
{
  return this.http.delete(this.url +'/'+value);
}
}
