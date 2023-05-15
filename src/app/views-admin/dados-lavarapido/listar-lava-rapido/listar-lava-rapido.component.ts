import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LavaRapido } from 'src/app/model/lavarapido';
import { LavarapidoService } from 'src/app/service/lavarapido.sevice';

@Component({
  selector: 'app-listar-lava-rapido',
  templateUrl: './listar-lava-rapido.component.html',
  styleUrls: ['./listar-lava-rapido.component.css']
})
export class ListarLavaRapidoComponent implements OnInit {
lavaRapidos: LavaRapido[] = [];
  constructor(private service: LavarapidoService, private router: Router) { }

  ngOnInit(): void {
    this.service.getLavaRapido()
    .subscribe(data => {
      this.lavaRapidos = data;
    })
  }

  Editar(lavarapido: LavaRapido): void {
    localStorage.setItem("idLavarapido", lavarapido.idLavarapido.toString());
    this.router.navigate(["editar/lavarapido"]);
  }

  Home(){
    this.router.navigate(["home/admin"]);
  }

  Delete(lavarapido: LavaRapido){
    this.service.deleteServico(lavarapido)
    .subscribe(data=> {
      this.lavaRapidos=this.lavaRapidos.filter(s => s !== lavarapido);
      alert("Servico excluido com sucesso!");
    })
}
}