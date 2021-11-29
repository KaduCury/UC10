import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Compra } from './compra.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

baseUrl = "http://localhost:3001/compra"

constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

showMessege(msg: string): void{
  this.snackBar.open(msg, 'X', {
      duration: 3000,
      verticalPosition: "bottom"
  });
}

create(compra: Compra): Observable<Compra>{
    return this.http.post<Compra>(this.baseUrl, compra)
}

read(): Observable<Compra[]>{
  return this.http.get<Compra[]>(this.baseUrl)
}

readById(id: number): Observable<Compra> {
  const url = `${this.baseUrl}/${id}`
  return this.http.get<Compra>(url)
}

updateCompra(compra: Compra): Observable<Compra>{
  const url = `${this.baseUrl}/${compra.id}`
  return this.http.put<Compra>(url, compra)
}

deleteCompra(id: number): Observable<Compra>{
  const url = `${this.baseUrl}/${id}`
  return this.http.delete<Compra>(url)
}


}
