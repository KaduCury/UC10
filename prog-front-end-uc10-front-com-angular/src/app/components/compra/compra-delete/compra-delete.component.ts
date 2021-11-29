import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra.model';
import { CompraService } from '../compra.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compra-delete',
  templateUrl: './compra-delete.component.html',
  styleUrls: ['./compra-delete.component.css']
})
export class CompraDeleteComponent implements OnInit {

  compra!: Compra;

  constructor(private compraService: CompraService, 
              private router: Router,
              private route: ActivatedRoute 
) {}

ngOnInit(): void {
  const id = +Number(this.route.snapshot.paramMap.get('id'));
  this.compraService.readById(id).subscribe((compra) => {
    this.compra = compra;
  })
}

deleteCompra(): void{
  this.compraService.deleteCompra(Number(this.compra.id)).subscribe(() =>{
    this.compraService.showMessege('Compra deletada')
  });
}


cancelarCompra(): void{
  this.router.navigate([''])

}

tabelaCompra(): void{
  this.router.navigate(['/compra/tabela'])

}

}
