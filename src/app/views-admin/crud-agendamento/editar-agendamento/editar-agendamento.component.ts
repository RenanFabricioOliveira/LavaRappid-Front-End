import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/service/agendamento.service';

@Component({
  selector: 'app-editar-agendamento',
  templateUrl: './editar-agendamento.component.html',
  styleUrls: ['./editar-agendamento.component.css']
})
export class EditarAgendamentoComponent implements OnInit {

  agendamento: Agendamento = new Agendamento();
  constructor(private service: AgendamentoService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let idAgendamento = localStorage.getItem("idAgendamento");
    this.service.getAgendamentoId(+Number(idAgendamento))
      .subscribe(data => {
        this.agendamento = data;
      })
  }
  Atualizar(agendamento: Agendamento) {
    this.service.updateAgendamento(agendamento)
      .subscribe(data => {
        this.agendamento = data;
        alert("Agendamento atualizado com sucesso!");
        this.router.navigate(["listar/agendamentos"])
      })
  }

}
