import { Component, OnInit } from '@angular/core';
import { CompraService } from '../compra.service';
import { Router } from '@angular/router';
import { Compra } from '../compra.model';

@Component({
  selector: 'app-compra-create',
  templateUrl: './compra-create.component.html',
  styleUrls: ['./compra-create.component.css']
})
export class CompraCreateComponent implements OnInit {

  compra: Compra = {

    nome: '',
    sobrenome:  '',
    email:  '',
    telefone:  '',
    faixaEtaria: null,
    endereco:  '',
    numeroCasa: null,
    cep:  '',
    numeroCartao:  '',
    nomeTitular:  '',
    dataVenc:  '',
    anoVenc:  '',
    cvv: null,
    numeroParcelas: null
  }

  constructor(private compraService: CompraService, private router: Router ) { }

  ngOnInit(): void {
  }

  createCompra(): void{
    this.compraService.create(this.compra).subscribe(() => {
    this.compraService.showMessege('Compra realizada!')
    })
  }

  cancelarCompra(): void{
    this.router.navigate([''])

  }
  
  tabelaCompra(): void{
    this.router.navigate(['/compra/tabela'])

  }

}
