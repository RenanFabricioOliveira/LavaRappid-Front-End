import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/model/servico';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-listar-servico',
  templateUrl: './listar-servico.component.html',
  styleUrls: ['./listar-servico.component.css']
})
export class ListarServicoComponent implements OnInit{

  servicos: Servico[] = [];
  constructor(private service: ServicoService, private router: Router) { } 

  ngOnInit(): void { 
    this.service.getServicos() 
    .subscribe(data => { 
      this.servicos = data; 
    }) 
  } 
  voltarAoTopo(){ 
    const topo = document.getElementById("topo");
    if (topo) {
      topo.scrollIntoView(); 
    }
}

  Listar(){ 
    this.router.navigate(["listar/servicos"]); 
  } 

  Novo() { 
    this.router.navigate(["adicionar/servicos"]); 
  } 

  Editar(servico: Servico): void { 
    localStorage.setItem("idServico", servico.idServico.toString()); 
    this.router.navigate(["editar/servicos"]);
  }

  Delete(servico: Servico){
    this.service.deleteServico(servico)
    .subscribe(data=> {
      this.servicos=this.servicos.filter(s => s !== servico);
      alert("Servico excluido com sucesso!");
    })
}



}
