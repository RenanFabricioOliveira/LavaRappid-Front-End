import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Veiculo } from "../model/veiculo";


@Injectable({
    providedIn: 'root'
})
export class VeiculoService {

    constructor(private http:HttpClient) { }

    url='http://localhost:8080/lavarappid/veiculos';

    getVeiculos(){
        return this.http.get<Veiculo[]>(this.url);
    }

    createVeiculo(veiculo: Veiculo){
        return this.http.post<Veiculo>(this.url, veiculo);
    }

    getVeiculoId(placa: string){
        return this.http.get<Veiculo>(this.url + "/" + placa);
    }

    updateVeiculo(veiculo: Veiculo){
        return this.http.put<Veiculo>(this.url + "/" + veiculo.placa, veiculo);
    }

    deleteVeiculo(veiculo: Veiculo){
        return this.http.delete<Veiculo>(this.url + "/" + veiculo.placa);
    }

}