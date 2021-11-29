import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { CadastroDeleteComponent } from './components/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroTabelaComponent } from './components/cadastro/cadastro-tabela/cadastro-tabela.component';
import { CadastroUpdateComponent } from './components/cadastro/cadastro-update/cadastro-update.component';
import { CasaCreateComponent } from './components/casa/casa-create/casa-create.component';
import { CasaDeleteComponent } from './components/casa/casa-delete/casa-delete.component';
import { CasaTabelaComponent } from './components/casa/casa-tabela/casa-tabela.component';
import { CasaUpdateComponent } from './components/casa/casa-update/casa-update.component';
import { CompraCreateComponent } from './components/compra/compra-create/compra-create.component';
import { CompraDeleteComponent } from './components/compra/compra-delete/compra-delete.component';
import { CompraTabelaComponent } from './components/compra/compra-tabela/compra-tabela.component';
import { CompraUpdateComponent } from './components/compra/compra-update/compra-update.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { EventoTabelaComponent } from './components/evento/evento-tabela/evento-tabela.component';
import { EventoUptadeComponent } from './components/evento/evento-uptade/evento-uptade.component';
import { CasaShowComponent } from './views/casa-show/casa-show.component';
import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [ 
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'compra/create',
    component: CompraCreateComponent,
  },
  {
    path: 'compra/tabela',
    component: CompraTabelaComponent,
  },
  {
    path: 'compra/update/:id',
    component: CompraUpdateComponent,
  },
  {
    path: 'compra/delete/:id',
    component: CompraDeleteComponent,
  },
  {
    path: 'casaShow',
    component: CasaShowComponent,
  },
  {
    path: 'casa/create',
    component: CasaCreateComponent,
  },
  {
    path: 'casa/tabela',
    component: CasaTabelaComponent,
  },
  {
    path: 'casa/update/:id',
    component: CasaUpdateComponent,
  },
  {
    path: 'casa/delete/:id',
    component: CasaDeleteComponent,
  },
  {
    path: 'evento',
    component: EventoCrudComponent,
  },
  {
    path: 'evento/create',
    component: EventoCreateComponent,
  },
  {
    path: 'evento/tabela',
    component: EventoTabelaComponent,
  },
  {
    path: 'evento/update/:id',
    component: EventoUptadeComponent,
  },
  {
    path: 'evento/delete/:id',
    component: EventoDeleteComponent,
  },
  {
    path: 'cadastro',
    component: CadastroCreateComponent,
  },
  {
    path: 'cadastro/tabela',
    component: CadastroTabelaComponent,
  },
  {
    path: 'cadastro/update/:id',
    component: CadastroUpdateComponent,
  },
  {
    path: 'cadastro/delete/:id',
    component: CadastroDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
