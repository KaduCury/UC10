import { Component, OnInit } from '@angular/core';
import { CasaService } from '../casa.service';
import { Router } from '@angular/router';
import { Casa } from '../casa.model';

@Component({
  selector: 'app-casa-create',
  templateUrl: './casa-create.component.html',
  styleUrls: ['./casa-create.component.css']
})
export class CasaCreateComponent implements OnInit {

  casa: Casa = {
    nomeCasa: '',
    enderecoCasa: '',
    qtddPessoas: ''
  }

  constructor(private casaService: CasaService, private router: Router) { }

  ngOnInit(): void {
  }

  createCasa(): void{
    this.casaService.create(this.casa).subscribe(() => {
    this.casaService.showMessege('Casa Cadastrada!')
    })
  }

  navigateCasaCreate(): void{
    this.router.navigate(['/casa/create'])
  }

  cancelarCasa(): void{
    this.router.navigate([''])

  }
  
  tabelaCasa(): void{
    this.router.navigate(['/casa/tabela'])

  }

}
