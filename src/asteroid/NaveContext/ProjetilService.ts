import { ProjetilInterface } from "./ProjetilInterface";
import { LogService } from "../SharedContext/LogService";
import { ProjetilEntity } from "./ProjetilEntity";

export class ProjetilService implements ProjetilInterface {
    private objProjetilRepositoy : ProjetilInterface;

    constructor(iProjetilInterface : ProjetilInterface) {
        this.objProjetilRepositoy = iProjetilInterface
    }

    // um novo tiro ou disparo
    novoProjetil() : void {
        this.objProjetilRepositoy.novoProjetil();
    }

    // mover todos os projeteis disparados
    moverProjeteis() : void {
        this.objProjetilRepositoy.moverProjeteis();
    }

    verificarLimite() : boolean {
        return true;
    }

}
