import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/model/veiculo';
import { VeiculoService } from 'src/app/service/veiculo.service';

@Component({
  selector: 'app-adicionar-veiculo',
  templateUrl: './adicionar-veiculo.component.html',
  styleUrls: ['./adicionar-veiculo.component.css']
})
export class AdicionarVeiculoComponent implements OnInit{
 
  onSubmit(form: any){
    console.log(form);
  } 

  constructor(private service : VeiculoService, private router : Router){ }

  veiculo : Veiculo = new Veiculo(); 
  ngOnInit(): void {
  }

  Salvar(){
    this.service.createVeiculo(this.veiculo)
    .subscribe(data => {
      alert("Veiculo cadastrado com sucesso!");
      this.router.navigate(['/listar/veiculos']);
    })
  }
}
