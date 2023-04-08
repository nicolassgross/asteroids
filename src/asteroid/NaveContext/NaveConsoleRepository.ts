import { NaveInterface } from "./NaveInterface";
import { LogInterface } from "../SharedContext/LogInterface";

export class NaveConsoleRepository implements NaveInterface {
    private objLogService : LogInterface;

    // este inject é necessário para que o DI saiba qual interface concreta será construida
    public static inject = ['LogInterface'] as const;

    constructor(iLogInterface : LogInterface) {
        this.objLogService = iLogInterface
    }

    acelerar() : void {
        this.objLogService.logarTexto('Nave acelerando');
    }

    girarParaEsquerda(): void {
        this.objLogService.logarTexto('Nave girando para a esquerda');
    }

    girarParaDireita(): void {
        this.objLogService.logarTexto('Nave girando para a direita');
    }

    atirar(): void {
        this.objLogService.logarTexto('Nave atirando');
    }

    explodirNave(): void {
        this.objLogService.logarTexto('Nave explodiu');
    }
}
