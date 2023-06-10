import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/service/agendamento.service';
@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  onSubmit(form: any){
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
        this.router.navigate(["agendamento/concluido"]);
      },
      error => {
        console.table(error);
        alert("Veiculo não cadastrado, bora cadastrar!");
        this.router.navigate(['/cadastro/veiculo'])
        
      })

  }

}