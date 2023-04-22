import { NaveEntity } from "./NaveEntity";
import { ProjetilEntity } from "./ProjetilEntity";

export interface ProjetilInterface {
    // um novo tiro ou disparo
    novoProjetil(
        objNaveEntity : NaveEntity,
        velocidade : number,
        limite  : number
    ) : void;

    // retorna os projeteis
    getArrProjeteis() : Array<ProjetilEntity>;

    // mover todos os projeteis disparados
    moverProjeteis() : void;

    verificarLimite(limite_final : number) : boolean
}