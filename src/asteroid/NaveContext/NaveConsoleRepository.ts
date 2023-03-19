import { NaveInterface } from "./NaveInterface";
import { LogService } from "../SharedContext/LogService";

export class NaveConsoleRepository implements NaveInterface {
    acelerar() : void {
        LogService.logarTexto('Nave acelerando');
    }

    girarParaEsquerda(): void {
        LogService.logarTexto('Nave girando para a esquerda');
    }

    girarParaDireita(): void {
        LogService.logarTexto('Nave girando para a direita');
    }

    atirar(): void {
        LogService.logarTexto('Nave atirando');
    }

    explodirNave(): void {
        LogService.logarTexto('Nave explodiu');
    }
}
