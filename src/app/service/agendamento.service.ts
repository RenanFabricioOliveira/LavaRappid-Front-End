import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Agendamento } from "../model/agendamento";
import { Veiculo } from "../model/veiculo";


@Injectable({
    providedIn: 'root'
})
export class AgendamentoService {

    constructor(private http:HttpClient) { }

    url='http://localhost:8080/lavarappid/agendamentos';

    getAgendamentos(){
        return this.http.get<Agendamento[]>(this.url);
    }

    createAgendamento(agendamento: Agendamento){
        return this.http.post<Agendamento>(this.url, agendamento);
    }

    getAgendamentoId(id: number){
        return this.http.get<Agendamento>(this.url + "/" + id);
    }

    getVeiculos(){
        return this.http.get<Veiculo[]>(this.url);
    }

    updateAgendamento(agendamento: Agendamento){
        return this.http.put<Agendamento>(this.url + "/" + agendamento.idAgendamento, agendamento);
    } 
    deleteAgendamento(agendamento: Agendamento){
        return this.http.delete<Agendamento>(this.url + "/" + agendamento.idAgendamento);
    } 
}