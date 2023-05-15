import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agendamento } from 'src/app/model/agendamento';
import { Cliente } from 'src/app/model/cliente';
import { AgendamentoService } from 'src/app/service/agendamento.service';

@Component({
  selector: 'app-listar-agendamento',
  templateUrl: './listar-agendamento.component.html',
  styleUrls: ['./listar-agendamento.component.css']
})
export class ListarAgendamentoComponent implements OnInit {

  agendamentos: Agendamento[] = [];
  clientes: Cliente[] = [];
  constructor(private service: AgendamentoService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAgendamentos()
      .subscribe(data => {
        this.agendamentos = data;
      })
  }

  voltarAoTopo() {
    const topo = document.getElementById("topo");
    if (topo) {
      topo.scrollIntoView();
    }
  }

  Listar() {
    this.router.navigate(["listar/agendamentos"]);
  }
  Novo() {
    this.router.navigate(["adicionar/agendamentos"]);
  }


  Editar(agendamento: Agendamento): void {
    localStorage.setItem("idAgendamento", agendamento.idAgendamento.toString());
    this.router.navigate(["editar/agendamentos"]);
  }

  Delete(agendamento: Agendamento) {
    this.service.deleteAgendamento(agendamento)
      .subscribe(data => {
        this.agendamentos = this.agendamentos.filter(a => a !== agendamento);
        alert("Agendamento excluido com sucesso!");
      })
  }
}