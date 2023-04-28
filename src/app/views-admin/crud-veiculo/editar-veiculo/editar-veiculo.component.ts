import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/model/veiculo';
import { VeiculoService } from 'src/app/service/veiculo.service';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css']
})
export class EditarVeiculoComponent implements OnInit{

  veiculo: Veiculo = new Veiculo();
  constructor(private service: VeiculoService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let placa = localStorage.getItem("placa");
    this.service.getVeiculoId(String(placa))
      .subscribe(data => {
        this.veiculo = data;
      })
  }

  Atualizar(veiculo: Veiculo) {
    this.service.updateVeiculo(veiculo)
      .subscribe(data => {
        this.veiculo = data;
        alert("Veiculo atualizado com sucesso!");
        this.router.navigate(["listar/veiculos"])
      })
  }
}
