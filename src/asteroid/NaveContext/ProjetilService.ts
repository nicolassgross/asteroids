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
    novoProjetil(objNaveEntity : NaveEntity) : void {
        this.objProjetilRepositoy.novoProjetil(
            objNaveEntity
        );
    }

    // mover todos os projeteis disparados
    moverProjeteis() : void {
        this.objProjetilRepositoy.moverProjeteis();
    }

    verificarLimite() : boolean {
        return true;
    }

}
