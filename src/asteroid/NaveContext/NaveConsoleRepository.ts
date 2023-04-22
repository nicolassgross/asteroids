import { NaveInterface } from "./NaveInterface";
import { LogInterface } from "../SharedContext/LogInterface";
import { NaveEntity } from "./NaveEntity";
import { NaveFactory } from "./NaveFactory";
import { ProjetilService } from "./ProjetilService";
import { ProjetilInterface } from "./ProjetilInterface";

export class NaveConsoleRepository implements NaveInterface {
    private objLogService : LogInterface;
    private objNaveEntity : NaveEntity;
    private objProjetilService : ProjetilService;

    // este inject é necessário para que o DI saiba qual interface concreta será construida
    public static inject = ['LogInterface', 'ProjetilConcreteRepository'] as const;

    constructor(
        iLogInterface : LogInterface,
        objProjetilConcreteRepository : ProjetilInterface
    ) {
        this.objLogService = iLogInterface;
        this.objProjetilService = new ProjetilService(objProjetilConcreteRepository)

        // avaliar este new aqui
        this.objNaveEntity = new NaveFactory().criarNave();
    }

    getEntity() : NaveEntity {
        return this.objNaveEntity;
    }

    acelerar() : void {
        this.objLogService.logarTexto('Nave acelerando');

        this.objNaveEntity.velocidade += 0.03;
    }

    desacelerar() : void {
        this.objLogService.logarTexto('Nave desacelerando');

        // cuidado para nao andar para traz
        if (this.objNaveEntity.velocidade >= 0) {
            this.objNaveEntity.velocidade -= 0.01;
        }
    }

    girarParaEsquerda(): void {
        this.objLogService.logarTexto('Nave girando para a esquerda');
        this.objNaveEntity.direcao_em_graus -= 0.05;
    }

    girarParaDireita(): void {
        this.objLogService.logarTexto('Nave girando para a direita');
        this.objNaveEntity.direcao_em_graus += 0.05;
    }

    atirar(): void {
        this.objLogService.logarTexto('Nave atirando');

        // this.objProjetilService.novoProjetil(
        //     this.getEntity(),
        //     1,
        //     10
        // );
    }

    explodirNave(): void {
        this.objLogService.logarTexto('Nave explodiu');
    }

    verificarSaidaCenario(
        tamanho_mapa_x : number,
        tamanho_mapa_y : number
    ): void {
        const tamanho_nave = this.objNaveEntity.tamanho_x;

        // se sair pela direita
        if (this.objNaveEntity.posicao_x >= (tamanho_mapa_x + tamanho_nave)) {
            this.objNaveEntity.posicao_x = tamanho_nave;
        }

        // se sair por baixo
        if (this.objNaveEntity.posicao_y >= (tamanho_mapa_y + tamanho_nave)) {
            this.objNaveEntity.posicao_y = tamanho_nave;
        }

        // se sair pela esquerda
        if (this.objNaveEntity.posicao_x <= (0 - tamanho_nave)) {
            this.objNaveEntity.posicao_x = tamanho_mapa_x - tamanho_nave;
        }

        // se sair por cima
        if (this.objNaveEntity.posicao_y <= (0 - tamanho_nave)) {
            this.objNaveEntity.posicao_y = tamanho_mapa_y - tamanho_nave;
        }
    }
}
