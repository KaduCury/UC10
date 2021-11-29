import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casa } from './casa.model';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  baseUrl = "http://localhost:3001/casa"

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessege(msg: string): void{
    this.snackBar.open(msg, 'X', {
       duration: 3000,
       verticalPosition: "bottom"
    });
  }

  create(casaShow: Casa): Observable<Casa>{
    return this.http.post<Casa>(this.baseUrl, casaShow)
  }

  read(): Observable<Casa[]>{
    return this.http.get<Casa[]>(this.baseUrl)
  }

  readById(id: number): Observable<Casa> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Casa>(url)
  }

  updateCasa(casa: Casa): Observable<Casa>{
   const url = `${this.baseUrl}/${casa.id}`
   return this.http.put<Casa>(url, casa)
  }

  deleteCasa(id: number): Observable<Casa>{
   const url = `${this.baseUrl}/${id}`
    return this.http.delete<Casa>(url)
  }

}
