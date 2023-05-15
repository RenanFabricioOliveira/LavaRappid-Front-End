import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/service/agendamento.service';

@Component({
  selector: 'app-adicionar-agendamento',
  templateUrl: './adicionar-agendamento.component.html',
  styleUrls: ['./adicionar-agendamento.component.css']
})
export class AdicionarAgendamentoComponent implements OnInit {

  onSubmit(form: any) {
    console.log(form);
  }

  constructor(private service: AgendamentoService, private router: Router) { }

  agendamento: Agendamento = new Agendamento();
  ngOnInit(): void {
  }
  Salvar() {
    this.service.createAgendamento(this.agendamento)
      .subscribe(response => {
        console.table(response);
        alert("Agendamento realizado com sucesso!");
        this.router.navigate(["listar/agendamentos"]);
      },
        error => {
          console.table(error);
          alert("Veiculo não cadastrado!");
          this.router.navigate(['/adicionar/veiculos'])

        })
  }
}