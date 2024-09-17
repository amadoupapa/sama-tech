import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private PUBLIC_BASE_URL:string = "http://127.0.0.1:9091/api/v1/public/contacts"
  private BASE_URL:string = "http://127.0.0.1:9091/api/v1/contacts"
   
   constructor(private http:HttpClient) { }
 
   createContactMessage(requestBody:any):Observable<any>{
     return this.http.post(this.PUBLIC_BASE_URL,requestBody)
   }
 
   fiindById(id:Number):Observable<any>{
    return this.http.post(`${this.PUBLIC_BASE_URL}/find-by-id`,{id:id})
   }
 
}
