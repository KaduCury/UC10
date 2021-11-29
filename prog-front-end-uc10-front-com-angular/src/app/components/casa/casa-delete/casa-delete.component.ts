import { Component, OnInit } from '@angular/core';
import { Casa } from '../casa.model';
import { CasaService } from '../casa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casa-delete',
  templateUrl: './casa-delete.component.html',
  styleUrls: ['./casa-delete.component.css']
})
export class CasaDeleteComponent implements OnInit {

  casa! : Casa;

  constructor(private casaService: CasaService, 
              private router: Router,
              private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    const id = +Number(this.route.snapshot.paramMap.get('id'));
    this.casaService.readById(id).subscribe((casa) => {
      this.casa = casa;
    })
  }

  createCasa(): void{
    this.router.navigate(['/casa'])
  
  }

  deleteCasa(): void{
    this.casaService.deleteCasa(Number(this.casa.id)).subscribe(() =>{
      this.casaService.showMessege('Casa deletada')
    });
  }


  cancelarCasa(): void{
    this.router.navigate(['/casa'])

  }
  
  tabelaCasa(): void{
    this.router.navigate(['/casa/tabela'])

  }

}
