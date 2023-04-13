import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.sevice';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes: Cliente[] = [];
  constructor(private service: ClienteService, private router: Router) { } 

  ngOnInit(): void { 
    this.service.getClientes() 
    .subscribe(data => { 
      this.clientes = data; 
    }) 
  } 
    
  voltarAoTopo(){ 
      const topo = document.getElementById("topo");
      if (topo) {
        topo.scrollIntoView(); 
      }
  }
 
  Listar(){ 
    this.router.navigate(["listar/clientes"]); 
  } 
  
  Novo() { 
    this.router.navigate(["adicionar/clientes"]); 
  } 
  
  Editar(cliente: Cliente): void { 
    localStorage.setItem("cpf", cliente.cpf.toString()); 
    this.router.navigate(["editar/clientes"]);
  }

  Delete(cliente: Cliente){
    this.service.deleteCliente(cliente)
    .subscribe(data=> {
      this.clientes=this.clientes.filter(c => c !== cliente);
      alert("Cliente excluido com sucesso!");
    })
  }
}

