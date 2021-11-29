import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa-tabela',
  templateUrl: './casa-tabela.component.html',
  styleUrls: ['./casa-tabela.component.css']
})
export class CasaTabelaComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  createCasa(): void{
    this.router.navigate(['/casa/create'])
  
  }

  pageHome(): void{
    this.router.navigate([''])

  }

  tabelaCasa(): void{
    this.router.navigate(['/casa/tabela'])

  }

}
