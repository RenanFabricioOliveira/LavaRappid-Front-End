import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeClienteComponent } from './views-cliente/home-cliente/home-cliente.component';
import { CadastroClienteComponent } from './views-cliente/cadastro-cliente/cadastro-cliente.component';
import { ListarComponent } from './views-admin/crud-cliente/listar/listar.component';
import { AdicionarComponent } from './views-admin/crud-cliente/adicionar/adicionar.component';
import { EditarComponent } from './views-admin/crud-cliente/editar/editar.component';

const routes: Routes = [
{path: 'listar/clientes', component: ListarComponent}, 
{path: 'adicionar/clientes', component: AdicionarComponent}, 
{path: 'editar/clientes', component: EditarComponent}, 

{path: '', component: HomeClienteComponent}, 
{path: 'listar/clientes', component: HomeClienteComponent}, 
{path: 'cadastro/cliente', component: CadastroClienteComponent}, 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
