import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-tabela',
  templateUrl: './compra-tabela.component.html',
  styleUrls: ['./compra-tabela.component.css']
})
export class CompraTabelaComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  createCompra(): void{
    this.router.navigate(['/compra/create'])
  
  }

  pageHome(): void{
    this.router.navigate([''])

  }

  tabelaCompra(): void{
    this.router.navigate(['/compra/tabela'])

  }

}
