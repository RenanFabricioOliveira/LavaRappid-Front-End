import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ListarComponent } from './views-admin/crud-cliente/listar/listar.component';
import { AdicionarComponent } from './views-admin/crud-cliente/adicionar/adicionar.component';
import { EditarComponent } from './views-admin/crud-cliente/editar/editar.component';
import { CadastroClienteComponent } from './views-cliente/cadastro-cliente/cadastro-cliente.component';
import { HomeClienteComponent } from './views-cliente/home-cliente/home-cliente.component';
import { ClienteService } from './service/cliente.sevice';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AdicionarComponent,
    EditarComponent,
    HomeClienteComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
