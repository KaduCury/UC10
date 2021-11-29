import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento-delete',
  templateUrl: './evento-delete.component.html',
  styleUrls: ['./evento-delete.component.css']
})
export class EventoDeleteComponent implements OnInit {

  evento! : Evento;

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

  deleteEvento(): void{
    this.eventoService.deleteEvento(Number(this.evento.id)).subscribe(() =>{
      this.eventoService.showMessege('Evento deletado')
      this.router.navigate(["/evento/tabela"]);
    });
  }

  updateEvento(): void{
    this.eventoService.updateEvento(this.evento).subscribe(() => {
      this.eventoService.showMessege('O usuário foi atualizado')
      this.router.navigate(["/evento/tabela"]);
    });
  }

  cancelarEvento(): void{
    this.router.navigate(['/evento/create'])

  }
  
  tabelasEvento(): void{
    this.router.navigate(['/evento/tabela'])

  }

}
