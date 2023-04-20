export class ComponenteEntity {
    velocidade: number;
    posicao_x: number;
    posicao_y: number;
    direcao_em_graus: number;
    tamanho_x: number;
    tamanho_y: number;

    constructor(
        velocidade:number,
        posicao_x:number,
        posicao_y:number,
        tamanho_x:number,
        tamanho_y:number,
        direcao_em_graus:number
    ) {
        this.velocidade = velocidade;
        this.posicao_x = posicao_x;
        this.posicao_y = posicao_y;
        this.tamanho_x = tamanho_x;
        this.tamanho_y = tamanho_y;
        this.direcao_em_graus = direcao_em_graus;
    }
}