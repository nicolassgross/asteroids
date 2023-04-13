import { NaveInterface } from "./NaveInterface";
import { LogInterface } from "../SharedContext/LogInterface";
import { NaveEntity } from "./NaveEntity";
import { NaveFactory } from "./NaveFactory";

export class NaveConsoleRepository implements NaveInterface {
    private objLogService : LogInterface;
    private objNaveEntity : NaveEntity;

    // este inject é necessário para que o DI saiba qual interface concreta será construida
    public static inject = ['LogInterface'] as const;

    constructor(iLogInterface : LogInterface) {
        this.objLogService = iLogInterface;

        // avaliar este new aqui
        this.objNaveEntity = new NaveFactory().criarNave();
    }

    getNaveEntity() : NaveEntity {
        return this.objNaveEntity;
    }

    acelerar() : void {
        this.objLogService.logarTexto('Nave acelerando');
        this.objNaveEntity.velocidade += 1;
    }

    girarParaEsquerda(): void {
        this.objLogService.logarTexto('Nave girando para a esquerda');
        this.objNaveEntity.direcao_em_graus -= 1;
    }

    girarParaDireita(): void {
        this.objLogService.logarTexto('Nave girando para a direita');
        this.objNaveEntity.direcao_em_graus += 1;
    }

    atirar(): void {
        this.objLogService.logarTexto('Nave atirando');
    }

    explodirNave(): void {
        this.objLogService.logarTexto('Nave explodiu');
    }
}
