import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra.model';
import { CompraService } from '../compra.service';

@Component({
  selector: 'app-compra-read',
  templateUrl: './compra-read.component.html',
  styleUrls: ['./compra-read.component.css']
})
export class CompraReadComponent implements OnInit {

  compra! : Compra[]
  displayedColumns = ['id', 'nome', 'sobrenome', 'email', 'telefone', 'faixaEtaria', 'endereco', 'numeroCasa', 'action'];

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
    this.compraService.read().subscribe(compra => {
      this.compra = compra
    })
  }

}
