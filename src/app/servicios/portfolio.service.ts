import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  [x: string]: any;

  constructor(private http: HttpClient) { }


  obtenerDatos(): Observable<any> {
    /* console.log("elservicio funciona"); */
    return this.http.get('https://back.portfoliorcruz.com/ver/personas');

  }

  /* ------ENCABEZADO */
  editarEncabezado(url: string, body: any): Observable<any> {
    return this.http.put(url, body);
  }


  /* ------EXPERIENCIA */
  nuevaExperiencia(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

  borrarExperiencia(url: string, body: any): Observable<any> {
    return this.http.delete(url, body);
  }

  editarExperiencia(url: string, body: any): Observable<any> {
    return this.http.put(url, body);
  }

  /* ------EDUCACION */

  nuevaEducacion(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

  borrarEducacion(url: string, body: any): Observable<any> {
    return this.http.delete(url, body);
  }

  editarEducacion(url: string, body: any): Observable<any> {
    return this.http.put(url, body);
  }

  /* ------ACERCA DE */
  nuevaAcercaDe(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

  borrarAcercaDe(url: string, body: any): Observable<any> {
    return this.http.delete(url, body);
  }

  editarAcercaDe(url: string, body: any): Observable<any> {
    return this.http.put(url, body);
  }

  /* ------SKILLS */
  nuevaHabilidad(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

  borrarHabilidad(url: string, body: any): Observable<any> {
    return this.http.delete(url, body);
  }

  editarHabilidad(url: string, body: any): Observable<any> {
    return this.http.put(url, body);
  }

  /* ------PROYECTOS */
  nuevoProyecto(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

  borrarProyecto(url: string, body: any): Observable<any> {
    return this.http.delete(url, body);
  }

  editarProyecto(url: string, body: any): Observable<any> {
    return this.http.put(url, body);
  }

  /* ------REDES */
  nuevaRed(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

  borrarRed(url: string, body: any): Observable<any> {
    return this.http.delete(url, body);
  }

  editarRed(url: string, body: any): Observable<any> {
    return this.http.put(url, body);
  }
}
