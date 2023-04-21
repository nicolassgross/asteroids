import { NaveEntity } from "./NaveEntity";

export class NaveFactory {
    criarNave() : NaveEntity {
        return new NaveEntity(
            0.01,
            200,
            200,
            20,
            20,
            4.65
        );

        // velocidade:number,
        // posicao_x:number,
        // posicao_y:number,
        // tamanho_x:number,
        // tamanho_y:number,
        // direcao_em_graus:number
    }
}