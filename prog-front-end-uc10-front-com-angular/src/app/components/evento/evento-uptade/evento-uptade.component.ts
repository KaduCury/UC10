import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../evento.service';
import { Evento } from '../evento.model';

@Component({
  selector: 'app-evento-uptade',
  templateUrl: './evento-uptade.component.html',
  styleUrls: ['./evento-uptade.component.css']
})
export class EventoUptadeComponent implements OnInit {

  evento!: Evento;

  constructor(private eventoService: EventoService, 
              private router: Router, 
              private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +Number(this.route.snapshot.paramMap.get('id'))
    this.eventoService.readById(id).subscribe(evento => {
      this.evento = evento
    });
  }

  createEvento(): void{
    this.router.navigate(["/evento/create"]);
    this.eventoService.create(this.evento).subscribe(() => {
    this.eventoService.showMessege('Evento cadastrado com sucesso!')
    })
  }

  updateEvento(): void{
    this.eventoService.updateEvento(this.evento).subscribe(() => {
      this.eventoService.showMessege('O usuário foi atualizado')
      this.router.navigate(["/evento/tabela"]);
    });
  }

  cancelarEvento(): void{
    this.router.navigate(['/evento'])

  }
  
  tabelasEvento(): void{
    this.router.navigate(['/evento/tabela'])

  }

}
