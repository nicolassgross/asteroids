import { NaveInterface } from "./NaveInterface";
import { LogService } from "../SharedContext/LogService";
import { NaveEntity } from "./NaveEntity";


export class NaveService implements NaveInterface {

    private objNaveRepository : NaveInterface;

    constructor(iNaveInterface : NaveInterface) {
        this.objNaveRepository = iNaveInterface
    }

    getEntity() : NaveEntity {
        return this.objNaveRepository.getEntity();
    }

    acelerar() : void {
        this.objNaveRepository.acelerar();
    }

    desacelerar() : void {
        this.objNaveRepository.desacelerar();
    }

    girarParaEsquerda(): void {
        this.objNaveRepository.girarParaEsquerda();
    }

    girarParaDireita(): void {
        this.objNaveRepository.girarParaDireita();
    }

    atirar(): void {
        this.objNaveRepository.atirar();
    }

    explodirNave(): void {
        this.objNaveRepository.explodirNave();
    }

    verificarSaidaCenario(
        tamanho_mapa_x : number,
        tamanho_mapa_y : number
    ): void {
        this.objNaveRepository.verificarSaidaCenario(
            tamanho_mapa_x,
            tamanho_mapa_y
        );
    }
}
