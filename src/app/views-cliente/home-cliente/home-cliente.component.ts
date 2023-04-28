import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  VoltarAoTopo(){ 
    const topo = document.getElementById("topo");
    if (topo) {
      topo.scrollIntoView(); 
    }
  }

  irParaSobre(){ 
    const topo = document.getElementById("pag-sobre");
    if (topo) {
      topo.scrollIntoView(); 
    }
  }

  irParaParceiros(){ 
    const topo = document.getElementById("pag-parceiros");
    if (topo) {
      topo.scrollIntoView(); 
    }
  }

  irParaContatos(){ 
    const topo = document.getElementById("pag-contatos");
    if (topo) {
      topo.scrollIntoView(); 
    }
  }
}
