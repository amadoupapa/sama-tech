import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  
 private PUBLIC_BASE_URL:string = "http://127.0.0.1:9091/api/v1/public/offres"
 private BASE_URL:string = "http://127.0.0.1:9091/api/v1/offres"



  
  constructor(private http:HttpClient) { }

  findAllOffres():Observable<any>{
    return this.http.get(this.PUBLIC_BASE_URL)
  }

  fiindById(id:Number):Observable<any>{
   return this.http.post(`${this.PUBLIC_BASE_URL}/find-by-id`,{id:id})
  }


}
