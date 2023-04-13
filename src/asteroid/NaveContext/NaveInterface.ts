import { NaveEntity } from "./NaveEntity";

export interface NaveInterface {
    getNaveEntity() : NaveEntity;
    acelerar() : void;
    girarParaEsquerda() : void;
    girarParaDireita() : void;
    atirar() : void;
    explodirNave() : void;
}