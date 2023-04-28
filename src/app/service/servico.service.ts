import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Servico } from "../model/servico";



@Injectable({
    providedIn: 'root'
})
export class ServicoService {

    constructor(private http:HttpClient) { }

    url='http://localhost:8080/lavarappid/servicos';

    getServicos(){
        return this.http.get<Servico[]>(this.url);
    }

    createServico(servico: Servico){
        return this.http.post<Servico>(this.url, servico);
    }

    getServicoId(id: number){
        return this.http.get<Servico>(this.url + "/" + id);
    }

    updateServico(servico: Servico){
        return this.http.put<Servico>(this.url + "/" + servico.idServico, servico);
    }

    deleteServico(servico: Servico){
        return this.http.delete<Servico>(this.url + "/" + servico.idServico);
    }

}