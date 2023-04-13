import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.sevice';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit{
  
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
      alert("Cliente cadastrado com sucesso!");
      this.router.navigate(['/listar/clientes'])
    })
  }
}
