import { NaveInterface } from "./NaveInterface";
import { LogService } from "../SharedContext/LogService";
import { NaveEntity } from "./NaveEntity";


export class NaveService implements NaveInterface {

    private objNaveRepositoy : NaveInterface;

    constructor(iNaveInterface : NaveInterface) {
        this.objNaveRepositoy = iNaveInterface
    }

    getEntity() : NaveEntity {
        return this.objNaveRepositoy.getEntity();
    }

    acelerar() : void {
        this.objNaveRepositoy.acelerar();
    }

    desacelerar() : void {
        this.objNaveRepositoy.desacelerar();
    }

    girarParaEsquerda(): void {
        this.objNaveRepositoy.girarParaEsquerda();
    }

    girarParaDireita(): void {
        this.objNaveRepositoy.girarParaDireita();
    }

    atirar(): void {
        this.objNaveRepositoy.atirar();
    }

    explodirNave(): void {
        this.objNaveRepositoy.explodirNave();
    }

    verificarSaidaCenario(
        tamanho_mapa_x : number,
        tamanho_mapa_y : number
    ): void {
        this.objNaveRepositoy.verificarSaidaCenario(
            tamanho_mapa_x,
            tamanho_mapa_y
        );
    }
}
