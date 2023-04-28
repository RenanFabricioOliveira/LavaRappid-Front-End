import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "../model/cliente";
import { LavaRapido } from "../model/lavarapido";


@Injectable({
    providedIn: 'root'
})
export class LavarapidoService {

    constructor(private http:HttpClient) { }

    url='http://localhost:8080/lavarappid/lavarapido';

    getLavaRapido(){
        return this.http.get<LavaRapido[]>(this.url);
    }

    createLavaRapido(lavarapido: LavaRapido){
        return this.http.post<LavaRapido>(this.url, lavarapido);
    }

    getLavaRapidoId(id: number){
        return this.http.get<LavaRapido>(this.url + "/" + id);
    }

    updateLavaRapido(lavarapido: LavaRapido){
        return this.http.put<LavaRapido>(this.url + "/" + lavarapido.idLavarapido, lavarapido);
    }  
}