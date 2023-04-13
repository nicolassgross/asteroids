import { NaveEntity } from "./NaveEntity";
import { ProjetilEntity } from "./ProjetilEntity";

export interface ProjetilInterface {
    // um novo tiro ou disparo
    novoProjetil(objNaveEntity : NaveEntity) : void;

    // mover todos os projeteis disparados
    moverProjeteis() : void;

    verificarLimite() : boolean;
}