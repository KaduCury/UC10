import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Evento } from './evento.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

    baseUrl = "http://localhost:3001/evento"


  constructor(private snackBar: MatSnackBar, private http: HttpClient ) {
   }
   showMessege(msg: string): void{
     this.snackBar.open(msg, 'X', {
        duration: 3000,
        verticalPosition: "bottom"
     });
   }

   create(evento: Evento): Observable<Evento>{
       return this.http.post<Evento>(this.baseUrl, evento)
   }

   read(): Observable<Evento[]>{
     return this.http.get<Evento[]>(this.baseUrl)
   }

   readById(id: number): Observable<Evento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Evento>(url)
  }

  updateEvento(evento: Evento): Observable<Evento>{
   const url = `${this.baseUrl}/${evento.id}`
   return this.http.put<Evento>(url, evento)
  }

  deleteEvento(id: number): Observable<Evento>{
   const url = `${this.baseUrl}/${id}`
    return this.http.delete<Evento>(url)
  }

}