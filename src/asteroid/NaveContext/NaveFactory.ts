import { NaveEntity } from "./NaveEntity";

export class NaveFactory {
    criarNave() : NaveEntity {
        return new NaveEntity(0, 0, 0, 0);
    }
}