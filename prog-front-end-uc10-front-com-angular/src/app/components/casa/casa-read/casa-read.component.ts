import { Component, OnInit } from '@angular/core';
import { CasaService } from '../casa.service';
import { Casa } from '../casa.model';

@Component({
  selector: 'app-casa-read',
  templateUrl: './casa-read.component.html',
  styleUrls: ['./casa-read.component.css']
})
export class CasaReadComponent implements OnInit {

  casas! : Casa[]
  displayedColumns = ['id', 'nomeCasa', 'enderecoCasa', 'qtddPessoas', 'action'];

  constructor(private casaService: CasaService ) { }

  ngOnInit(): void {
    this.casaService.read().subscribe(casas => {
      this.casas = casas
    })
  }

}
