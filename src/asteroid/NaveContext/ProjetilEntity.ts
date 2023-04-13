import { ComponenteEntity } from "../SharedContext/ComponenteEntity";

export class ProjetilEntity extends ComponenteEntity {

    // até aonde o tiro pode ir
    limite: number;

    constructor(
        velocidade:number,
        posicao_x:number,
        posicao_y:number,
        direcao_em_graus:number,
        limite:number
    ) {
        super(velocidade, posicao_x, posicao_y, direcao_em_graus);
        this.limite = limite
    }
}