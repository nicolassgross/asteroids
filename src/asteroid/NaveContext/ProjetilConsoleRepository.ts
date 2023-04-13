import { ProjetilInterface } from "./ProjetilInterface";
import { LogInterface } from "../SharedContext/LogInterface";
import { ProjetilEntity } from "./ProjetilEntity";
import { NaveEntity } from "./NaveEntity";


export class ProjetilConsoleRepository implements ProjetilInterface {
    // constantes
    readonly limite = 10;
    readonly velocidade = 10;

    private objLogService : LogInterface;
    public arrProjeteis : Array<ProjetilEntity>;

    // este inject é necessário para que o DI saiba qual interface concreta será construida
    public static inject = ['LogInterface'] as const;

    constructor(iLogInterface : LogInterface) {
        this.objLogService = iLogInterface;
        this.arrProjeteis = new Array<ProjetilEntity>;
    }

    novoProjetil(objNaveEntity : NaveEntity) : void {
        this.objLogService.logarTexto('Novo Projetil Criado');

        // adiciona novo item no projetil na posicao da nave
        this.arrProjeteis.push(
            new ProjetilEntity(
                this.velocidade,
                objNaveEntity.posicao_x,
                objNaveEntity.posicao_y,
                objNaveEntity.direcao_em_graus,
                this.limite
            )
        )
    }

    // mover todos os projeteis disparados
    moverProjeteis() : void {
        this.objLogService.logarTexto('Todos os projéteis movidos para frente');
    }

    verificarLimite() : boolean {
        return true;
    }
}
