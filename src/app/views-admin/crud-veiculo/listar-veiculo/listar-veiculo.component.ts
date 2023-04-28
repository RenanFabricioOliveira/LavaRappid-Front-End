import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/model/veiculo';
import { VeiculoService } from 'src/app/service/veiculo.service';

@Component({
  selector: 'app-listar-veiculo',
  templateUrl: './listar-veiculo.component.html',
  styleUrls: ['./listar-veiculo.component.css']
})
export class ListarVeiculoComponent {

  veiculos: Veiculo[] = [];
  constructor(private service: VeiculoService, private router: Router) { } 

  ngOnInit(): void { 
    this.service.getVeiculos() 
    .subscribe(data => { 
      this.veiculos = data; 
    }) 
  } 
    
  voltarAoTopo(){ 
      const topo = document.getElementById("topo");
      if (topo) {
        topo.scrollIntoView(); 
      }
  }
 
  Listar(){ 
    this.router.navigate(["listar/veiculos"]); 
  } 
  
  Novo() { 
    this.router.navigate(["adicionar/veiculos"]); 
  } 
  
  Editar(veiculo: Veiculo): void { 
    localStorage.setItem("placa", veiculo.placa.toString()); 
    this.router.navigate(["editar/veiculos"]);
  }

  Delete(veiculo: Veiculo){
    this.service.deleteVeiculo(veiculo)
    .subscribe(data=> {
      this.veiculos=this.veiculos.filter(v => v !== veiculo);
      alert("Veiculo excluido com sucesso!");
    })
  }
}
