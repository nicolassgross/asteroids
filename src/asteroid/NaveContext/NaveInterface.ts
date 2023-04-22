import { NaveEntity } from "./NaveEntity";

export interface NaveInterface {
    getEntity() : NaveEntity;
    acelerar() : void;
    desacelerar() : void;
    girarParaEsquerda() : void;
    girarParaDireita() : void;
    atirar() : void;
    explodirNave() : void;

    verificarSaidaCenario(
        tamanho_mapa_x : number,
        tamanho_mapa_y : number
    ): void;
}