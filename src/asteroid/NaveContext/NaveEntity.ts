export class NaveEntity {
    velocidade: number;

    constructor(velocidade:number) {
        this.velocidade = velocidade;
    }

    getVelocidade() : number {
        return this.velocidade;
    }
}