import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LavaRapido } from 'src/app/model/lavarapido';
import { LavarapidoService } from 'src/app/service/lavarapido.sevice';

@Component({
  selector: 'app-editar-lava-rapido',
  templateUrl: './editar-lava-rapido.component.html',
  styleUrls: ['./editar-lava-rapido.component.css']
})
export class EditarLavaRapidoComponent implements OnInit {
  
  lavarapido: LavaRapido = new LavaRapido();
  constructor(private service: LavarapidoService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let idLavarapido=localStorage.getItem("idLavarapido");
    this.service.getLavaRapidoId(+Number(idLavarapido))
    .subscribe(data => {
      this.lavarapido = data;
    })
  }
Atualizar(lavarapido: LavaRapido){
    this.service.updateLavaRapido(lavarapido)
    .subscribe(data=> {
      this.lavarapido = data;
      alert("Dados atualizados com sucesso!");
      this.router.navigate(["listar/lavarapido"])
    })
  }
}