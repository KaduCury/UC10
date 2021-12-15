import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { Cadastro } from './cadastro.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  baseUrl = "http://localhost:3001/cadastro";
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient ) {
  }
  showMessege(msg: string, isError: boolean = false) : void{
    this.snackBar.open(msg, 'X', {
      duration: 6000,
      verticalPosition: "top"
      panelClass: isError ? ['errorMsg'] : ['successMsg']
    });
  }

  create(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(this.baseUrl, cadastro).pipe(map((obj) => obj),
      catchError(e => this.errorMsg(e))
    ) 
  }
  
  errorMsg(e: any): Observable<any>{
    console.log(e);
    this.showMessege('Erro', true);
    return EMPTY
  }

  read(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(this.baseUrl)
  }

  readById(id: number): Observable<Cadastro> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cadastro>(url)
  }

  updateCadastro(cadastro: Cadastro): Observable<Cadastro>{
    const url = `${this.baseUrl}/${cadastro.id}`
    return this.http.put<Cadastro>(url, cadastro)
  }

  deleteCadastro(id: number): Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`
      return this.http.delete<Cadastro>(url)
  }
}
