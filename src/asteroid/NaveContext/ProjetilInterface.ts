import { ProjetilEntity } from "./ProjetilEntity";

export interface ProjetilInterface {
    // um novo tiro ou disparo
    novoProjetil() : void;

    // mover todos os projeteis disparados
    moverProjeteis() : void;

    verificarLimite() : boolean;
}