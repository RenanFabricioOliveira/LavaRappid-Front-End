import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeClienteComponent } from './views-cliente/home-cliente/home-cliente.component';
import { CadastroClienteComponent } from './views-cliente/cadastro-cliente/cadastro-cliente.component';
import { ListarComponent } from './views-admin/crud-cliente/listar/listar.component';
import { AdicionarComponent } from './views-admin/crud-cliente/adicionar/adicionar.component';
import { EditarComponent } from './views-admin/crud-cliente/editar/editar.component';
import { ListarServicoComponent } from './views-admin/crud-servico/listar-servico/listar-servico.component';
import { AdicionarServicoComponent } from './views-admin/crud-servico/adicionar-servico/adicionar-servico.component';
import { EditarServicoComponent } from './views-admin/crud-servico/editar-servico/editar-servico.component';
import { ServicosComponent } from './views-cliente/servicos/servicos.component';
import { ListarVeiculoComponent } from './views-admin/crud-veiculo/listar-veiculo/listar-veiculo.component';
import { AdicionarVeiculoComponent } from './views-admin/crud-veiculo/adicionar-veiculo/adicionar-veiculo.component';
import { EditarVeiculoComponent } from './views-admin/crud-veiculo/editar-veiculo/editar-veiculo.component';
import { CadastroVeiculoComponent } from './views-cliente/cadastro-veiculo/cadastro-veiculo.component';
import { EditarLavaRapidoComponent } from './views-admin/dados-lavarapido/editar-lava-rapido/editar-lava-rapido.component';
import { ListarLavaRapidoComponent } from './views-admin/dados-lavarapido/listar-lava-rapido/listar-lava-rapido.component';
import { HomeAdminComponent } from './views-admin/home-admin/home-admin.component';
import { ListarAgendamentoComponent } from './views-admin/crud-agendamento/listar-agendamento/listar-agendamento.component';
import { EditarAgendamentoComponent } from './views-admin/crud-agendamento/editar-agendamento/editar-agendamento.component';
import { AdicionarAgendamentoComponent } from './views-admin/crud-agendamento/adicionar-agendamento/adicionar-agendamento.component';
import { AgendamentoComponent } from './views-cliente/agendamento/agendamento.component';
import { AgendamentoConcluidoComponent } from './views-cliente/agendamento-concluido/agendamento-concluido.component';

const routes: Routes = [
{path: 'listar/clientes', component: ListarComponent}, 
{path: 'adicionar/clientes', component: AdicionarComponent}, 
{path: 'editar/clientes', component: EditarComponent}, 

{path: 'listar/veiculos', component: ListarVeiculoComponent},
{path: 'adicionar/veiculos', component: AdicionarVeiculoComponent},
{path: 'editar/veiculos', component: EditarVeiculoComponent},

{path: 'listar/servicos', component: ListarServicoComponent}, 
{path: 'adicionar/servicos', component: AdicionarServicoComponent}, 
{path: 'editar/servicos', component: EditarServicoComponent}, 

{path: 'listar/agendamentos', component: ListarAgendamentoComponent}, 
{path: 'adicionar/agendamentos', component: AdicionarAgendamentoComponent}, 
{path: 'editar/agendamentos', component: EditarAgendamentoComponent}, 

{path: 'editar/lavarapido', component: EditarLavaRapidoComponent},
{path: 'listar/lavarapido', component: ListarLavaRapidoComponent},

{path: 'home-admin', component: HomeAdminComponent}, 

{path: '', component: HomeClienteComponent}, 
{path: 'home', component: HomeClienteComponent}, 
{path: 'servicos', component: ServicosComponent}, 
{path: 'cadastro/cliente', component: CadastroClienteComponent},
{path: 'cadastro/veiculo',component: CadastroVeiculoComponent},
{path: 'agendamento', component: AgendamentoComponent},
{path: 'agendamento/concluido', component: AgendamentoConcluidoComponent},




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
