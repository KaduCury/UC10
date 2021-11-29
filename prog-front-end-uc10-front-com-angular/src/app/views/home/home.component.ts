import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/components/evento/evento.model';
import { EventoService } from 'src/app/components/evento/evento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {

  }

}
