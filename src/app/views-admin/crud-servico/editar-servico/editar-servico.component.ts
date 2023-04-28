import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/model/servico';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-editar-servico',
  templateUrl: './editar-servico.component.html',
  styleUrls: ['./editar-servico.component.css']
})
export class EditarServicoComponent implements OnInit{


  servico: Servico = new Servico();
  constructor(private service: ServicoService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let idServico = localStorage.getItem("idServico");
    this.service.getServicoId(+Number(idServico))
      .subscribe(data => {
        this.servico = data;
    })
  }

  Atualizar(servico: Servico) {
    this.service.updateServico(servico)
      .subscribe(data => {
        this.servico = data;
        alert("Servico atualizado com sucesso!");
        this.router.navigate(["listar/servicos"])
    })
  }

}
