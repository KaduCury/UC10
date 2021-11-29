import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-tabela',
  templateUrl: './evento-tabela.component.html',
  styleUrls: ['./evento-tabela.component.css']
})
export class EventoTabelaComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  
  createEvento(): void{
    this.router.navigate(['/evento/create'])
  
  }

  pageHome(): void{
    this.router.navigate([''])

  }

  tabelaEvento(): void{
    this.router.navigate(['/evento/tabela'])

  }

}
