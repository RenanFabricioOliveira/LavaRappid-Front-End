import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/model/servico';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-adicionar-servico',
  templateUrl: './adicionar-servico.component.html',
  styleUrls: ['./adicionar-servico.component.css'],
})
export class AdicionarServicoComponent implements OnInit{

  onSubmit(form: any) {
    console.log(form);
  }
  constructor(private service: ServicoService, private router: Router) { }

  servico: Servico = new Servico();
  ngOnInit(): void {
  }

  Salvar() {
    this.service.createServico(this.servico)
    .subscribe(data => {
      alert("Serviço cadastrado com sucesso!");
      this.router.navigate(['/listar/servicos']);
    })
  }
}

