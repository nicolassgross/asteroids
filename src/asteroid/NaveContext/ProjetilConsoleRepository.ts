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

    novoProjetil(
        objNaveEntity : NaveEntity,
        velocidade : number,
        limite  : number
    ) : void {
        this.objLogService.logarTexto('Novo Projetil Criado');

        // adiciona novo item no projetil na posicao da nave
        this.arrProjeteis.push(
            new ProjetilEntity(
                velocidade,
                objNaveEntity.posicao_x,
                objNaveEntity.posicao_y,
                10, // tamanho_x =
                10, // tamanho_y =
                objNaveEntity.direcao_em_graus,
                limite
            )
        )
    }

    getArrProjeteis() : Array<ProjetilEntity> {
        return this.arrProjeteis;
    }

    // mover todos os projeteis disparados
    moverProjeteis() : void {
        this.objLogService.logarTexto('Todos os projéteis movidos para frente');

        this.arrProjeteis.map( (objProjetilEntity) => {
            objProjetilEntity.posicao_x += 1;
            objProjetilEntity.posicao_y += 1;
            objProjetilEntity.limite +=1;

            return objProjetilEntity
        });
    }

    // se o limite do projetil chegar no limite final, ele deve ser excluido
    verificarLimite(limite_final : number) : boolean {
        this.arrProjeteis = this.arrProjeteis.filter( (element, index) => {
            console.log(element.limite);
            return element.limite <= limite_final
        });

        console.log(this.arrProjeteis.length);

        return true;
    }
}
