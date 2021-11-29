import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from'@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './components/templates/cabecalho/footer/footer.component';
import { HeaderComponent } from './components/templates/cabecalho/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { EventoReadComponent } from './components/evento/evento-read/evento-read.component';
import { EventoRead2Component } from './components/evento/evento-read2/evento-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { EventoTabelaComponent } from './components/evento/evento-tabela/evento-tabela.component';
import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { CadastroReadComponent } from './components/cadastro/cadastro-read/cadastro-read.component';
import { CadastroTabelaComponent } from './components/cadastro/cadastro-tabela/cadastro-tabela.component';
import { CadastroUpdateComponent } from './components/cadastro/cadastro-update/cadastro-update.component';
import { CadastroDeleteComponent } from './components/cadastro/cadastro-delete/cadastro-delete.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { EventoUptadeComponent } from './components/evento/evento-uptade/evento-uptade.component';
import { CasaShowComponent } from './views/casa-show/casa-show.component';
import { CasaCreateComponent } from './components/casa/casa-create/casa-create.component';
import { CasaReadComponent } from './components/casa/casa-read/casa-read.component';
import { CasaUpdateComponent } from './components/casa/casa-update/casa-update.component';
import { CasaDeleteComponent } from './components/casa/casa-delete/casa-delete.component';
import { CasaTabelaComponent } from './components/casa/casa-tabela/casa-tabela.component';
import { CompraCreateComponent } from './components/compra/compra-create/compra-create.component';
import { CompraDeleteComponent } from './components/compra/compra-delete/compra-delete.component';
import { CompraUpdateComponent } from './components/compra/compra-update/compra-update.component';
import { CompraReadComponent } from './components/compra/compra-read/compra-read.component';
import { CompraTabelaComponent } from './components/compra/compra-tabela/compra-tabela.component';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EventoCrudComponent,
    EventoCreateComponent,
    EventoReadComponent,
    EventoRead2Component,
    EventoTabelaComponent,
    CadastroCreateComponent,
    CadastroReadComponent,
    CadastroTabelaComponent,
    CadastroUpdateComponent,
    CadastroDeleteComponent,
    EventoDeleteComponent,
    EventoUptadeComponent,
    CasaShowComponent,
    CasaCreateComponent,
    CasaReadComponent,
    CasaUpdateComponent,
    CasaDeleteComponent,
    CasaTabelaComponent,
    CompraCreateComponent,
    CompraDeleteComponent,
    CompraUpdateComponent,
    CompraReadComponent,
    CompraTabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
