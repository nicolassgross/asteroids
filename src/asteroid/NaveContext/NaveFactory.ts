import { NaveEntity } from "./NaveEntity";

export class NaveFactory {
    criarNave() : NaveEntity {
        return new NaveEntity(10);
    }
}