import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  [x: string]: any;

  constructor(private http:HttpClient) { }


obtenerDatos():Observable<any>{
/* console.log("elservicio funciona"); */
 return this.http.get('http://localhost:8080/ver/personas');
 
}

nuevaExperiencia(url:string, body:any):Observable<any>{
  /* console.log("elservicio funciona"); */
   return this.http.post(url, body);
   
  }

  borrarExperiencia(url:string, body:any):Observable<any>{
    /* console.log("elservicio funciona"); */
     return this.http.delete(url, body);
     
    }

    editarExperiencia(url:string, body:any):Observable<any>{
      /* console.log("elservicio funciona"); */
       return this.http.put(url, body);
       
       
      }

      

}
