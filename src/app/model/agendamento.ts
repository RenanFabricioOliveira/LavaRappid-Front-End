import { Servico } from "./servico";
import { Veiculo } from "./veiculo";

export class Agendamento{
    idAgendamento: number = 0;
    dataAgendamento: string = "";
    horarioAgendamento: string = "";
    veiculo_Placa!: Veiculo;
    servico_idServico!: Servico;
    status: number = 0;
    observacoes: string = "";
}