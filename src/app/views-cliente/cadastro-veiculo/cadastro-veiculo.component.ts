import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/model/veiculo';
import { VeiculoService } from 'src/app/service/veiculo.service';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css']
})
export class CadastroVeiculoComponent implements OnInit {

  onSubmit(form: any){
    console.log(form);
 }
constructor(private service: VeiculoService, private router: Router) { }

  veiculo: Veiculo = new Veiculo();
  ngOnInit(): void {
  }
Salvar() {
    this.service.createVeiculo(this.veiculo)
      .subscribe(response => {
        console.table(response);
        alert("Maravilha! Seu veículo foi cadastrado!");
        this.router.navigate(["/agendamento"]);
      },
error => {
        console.table(error);
        alert("CPF não cadastrado, bora cadastrar!");
        this.router.navigate(['/cadastro/cliente'])
        
      })

  }
}