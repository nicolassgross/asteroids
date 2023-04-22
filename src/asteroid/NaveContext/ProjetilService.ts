import { ProjetilInterface } from "./ProjetilInterface";
import { LogService } from "../SharedContext/LogService";
import { ProjetilEntity } from "./ProjetilEntity";
import { NaveInterface } from "./NaveInterface";
import { NaveEntity } from "./NaveEntity";

export class ProjetilService implements ProjetilInterface {
    private objProjetilRepositoy : ProjetilInterface;

    constructor(
        iProjetilInterface : ProjetilInterface
    ) {
        this.objProjetilRepositoy = iProjetilInterface
    }

    // um novo tiro ou disparo
    novoProjetil(
        objNaveEntity : NaveEntity,
        velocidade : number,
        limite  : number
    ) : void {
        this.objProjetilRepositoy.novoProjetil(
            objNaveEntity,
            velocidade,
            limite
        );
    }

    getArrProjeteis() : Array<ProjetilEntity> {
        return this.objProjetilRepositoy.getArrProjeteis();
    }

    // mover todos os projeteis disparados
    moverProjeteis() : void {
        this.objProjetilRepositoy.moverProjeteis();
    }

    verificarLimite(limite_final : number) : boolean {
        return this.objProjetilRepositoy.verificarLimite(limite_final);
    }

}
