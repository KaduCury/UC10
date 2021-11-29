import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa-show',
  templateUrl: './casa-show.component.html',
  styleUrls: ['./casa-show.component.css']
})
export class CasaShowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateCasaShowCreate(): void{
    this.router.navigate(['/casa/create'])
  }

}
