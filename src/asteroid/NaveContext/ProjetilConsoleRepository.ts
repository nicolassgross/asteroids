import { ProjetilInterface } from "./ProjetilInterface";
import { LogInterface } from "../SharedContext/LogInterface";
import { ProjetilEntity } from "./ProjetilEntity";


export class ProjetilConsoleRepository implements ProjetilInterface {
    private objLogService : LogInterface;
    arrProjeteis : Array<ProjetilEntity>;

    // este inject é necessário para que o DI saiba qual interface concreta será construida
    public static inject = ['LogInterface'] as const;

    constructor(iLogInterface : LogInterface) {
        this.objLogService = iLogInterface;
        this.arrProjeteis = new Array<ProjetilEntity>;
    }

    novoProjetil() : void {
        console.log('chegou aqui.....')
        this.objLogService.logarTexto('Novo Projetil Criado');
    }

    // mover todos os projeteis disparados
    moverProjeteis() : void {
        this.objLogService.logarTexto('Todos os projéteis movidos para frente');
    }

    verificarLimite() : boolean {
        return true;
    }
}
