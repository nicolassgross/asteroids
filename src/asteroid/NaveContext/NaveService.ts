import { NaveInterface } from "./NaveInterface";
import { LogService } from "../SharedContext/LogService";
import { NaveEntity } from "./NaveEntity";


export class NaveService implements NaveInterface {

    private objNaveRepositoy : NaveInterface;

    constructor(iNaveInterface : NaveInterface) {
        this.objNaveRepositoy = iNaveInterface
    }

    getNaveEntity() : NaveEntity {
        return this.objNaveRepositoy.getNaveEntity();
    }

    acelerar() : void {
        this.objNaveRepositoy.acelerar();
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
}
