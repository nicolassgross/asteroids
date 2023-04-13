export class ComponenteEntity {
    velocidade: number;
    posicao_x: number;
    posicao_y: number;
    direcao_em_graus: number;

    constructor(
        velocidade:number,
        posicao_x:number,
        posicao_y:number,
        direcao_em_graus:number
    ) {
        this.velocidade = velocidade;
        this.posicao_x = posicao_x;
        this.posicao_y = posicao_y;
        this.direcao_em_graus = direcao_em_graus;
    }
}