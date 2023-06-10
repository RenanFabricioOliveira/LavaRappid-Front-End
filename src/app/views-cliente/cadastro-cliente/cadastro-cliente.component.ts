import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.sevice';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit{
  
  onSubmit(form: any) {
    console.log(form);
  }
  constructor(private service: ClienteService, private router: Router) { }

  cliente: Cliente = new Cliente();
  ngOnInit(): void {
  }

  Salvar() {
    this.service.createCliente(this.cliente)
    .subscribe(data => {
      alert("Certinho! cadastrado realizado com sucesso!");
      this.router.navigate(['/cadastro/veiculo'])
    })
  }
}
