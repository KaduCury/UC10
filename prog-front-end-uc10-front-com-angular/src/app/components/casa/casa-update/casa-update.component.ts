import { Component, OnInit } from '@angular/core';
import { Casa } from '../casa.model';
import { CasaService } from '../casa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casa-update',
  templateUrl: './casa-update.component.html',
  styleUrls: ['./casa-update.component.css']
})
export class CasaUpdateComponent implements OnInit {

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

  updateCasa(): void{
    this.casaService.updateCasa(this.casa).subscribe(() => {
      this.casaService.showMessege('Casa atualizada')
      this.router.navigate(["/casa/tabela"]);
    });
  }


  cancelarCasa(): void{
    this.router.navigate(['/casa'])

  }
  
  tabelaCasa(): void{
    this.router.navigate(['/casa/tabela'])

  }

}
