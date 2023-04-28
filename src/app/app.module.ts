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
import { ServicoService } from './service/servico.service';
import { ListarServicoComponent } from './views-admin/crud-servico/listar-servico/listar-servico.component';
import { AdicionarServicoComponent } from './views-admin/crud-servico/adicionar-servico/adicionar-servico.component';
import { EditarServicoComponent } from './views-admin/crud-servico/editar-servico/editar-servico.component';
import { ServicosComponent } from './views-cliente/servicos/servicos.component';
import { VeiculoService } from './service/veiculo.service';
import { EditarVeiculoComponent } from './views-admin/crud-veiculo/editar-veiculo/editar-veiculo.component';
import { ListarVeiculoComponent } from './views-admin/crud-veiculo/listar-veiculo/listar-veiculo.component';
import { CadastroVeiculoComponent } from './views-cliente/cadastro-veiculo/cadastro-veiculo.component';
import { AdicionarVeiculoComponent } from './views-admin/crud-veiculo/adicionar-veiculo/adicionar-veiculo.component';
import { EditarLavaRapidoComponent } from './views-admin/dados-lavarapido/editar-lava-rapido/editar-lava-rapido.component';
import { ListarLavaRapidoComponent } from './views-admin/dados-lavarapido/listar-lava-rapido/listar-lava-rapido.component';
import { LavarapidoService } from './service/lavarapido.sevice';
import { AdicionarAgendamentoComponent } from './views-admin/crud-agendamento/adicionar-agendamento/adicionar-agendamento.component';
import { EditarAgendamentoComponent } from './views-admin/crud-agendamento/editar-agendamento/editar-agendamento.component';
import { ListarAgendamentoComponent } from './views-admin/crud-agendamento/listar-agendamento/listar-agendamento.component';
import { AgendamentoService } from './service/agendamento.service';
import { AgendamentoComponent } from './views-cliente/agendamento/agendamento.component';
import { AgendamentoConcluidoComponent } from './views-cliente/agendamento-concluido/agendamento-concluido.component';
import { HomeAdminComponent } from './views-admin/home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AdicionarComponent,
    EditarComponent,
    HomeClienteComponent,
    CadastroClienteComponent,
    ListarServicoComponent,
    AdicionarServicoComponent,
    EditarServicoComponent,
    ServicosComponent,
    EditarVeiculoComponent,
    ListarVeiculoComponent,
    AdicionarVeiculoComponent,
    CadastroVeiculoComponent,
    EditarLavaRapidoComponent,
    ListarLavaRapidoComponent,
    AdicionarAgendamentoComponent,
    EditarAgendamentoComponent,
    ListarAgendamentoComponent,
    AgendamentoComponent,
    AgendamentoConcluidoComponent,
    HomeAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ClienteService, ServicoService, VeiculoService, LavarapidoService, AgendamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
