import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CompraService } from '../compra.service';

@Component({
  selector: 'app-compra-update',
  templateUrl: './compra-update.component.html',
  styleUrls: ['./compra-update.component.css']
})
export class CompraUpdateComponent implements OnInit {

  compra! : Compra;

  constructor(private compraService: CompraService, 
    private router: Router, 
    private route: ActivatedRoute
) {}

ngOnInit(): void {
  const id = +Number(this.route.snapshot.paramMap.get('id'))
  this.compraService.readById(id).subscribe(compra => {
    this.compra = compra
  });
}

updateCompra(): void{
  this.compraService.updateCompra(this.compra).subscribe(() => {
    this.compraService.showMessege('A compra foi atualizado')
    this.router.navigate(["/compra/tabela"]);
  });
}

cancelarCompra(): void{
  this.router.navigate([''])

}

tabelaCompra(): void{
  this.router.navigate(['/compra/tabela'])

}

}
