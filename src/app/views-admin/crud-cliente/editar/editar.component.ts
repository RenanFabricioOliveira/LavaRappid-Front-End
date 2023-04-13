import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.sevice';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cliente: Cliente = new Cliente();
  constructor(private service: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let cpf = localStorage.getItem("cpf");
    this.service.getClienteId(+Number(cpf))
      .subscribe(data => {
        this.cliente = data;
      })
  }

  Atualizar(cliente: Cliente) {
    this.service.updateCliente(cliente)
      .subscribe(data => {
        this.cliente = data;
        alert("Cliente atualizado com sucesso!");
        this.router.navigate(["listar/clientes"])
      })
  }
}
