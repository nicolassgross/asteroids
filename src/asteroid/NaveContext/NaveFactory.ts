import { NaveEntity } from "./NaveEntity";

export class NaveFactory {
    criarNave() : NaveEntity {
        return new NaveEntity(
            10,
            10,
            10,
            10,
            10,
            0
        );

        // velocidade:number,
        // posicao_x:number,
        // posicao_y:number,
        // tamanho_x:number,
        // tamanho_y:number,
        // direcao_em_graus:number
    }
}