import { JogoInterface } from "./JogoInterface";
import { LogInterface } from "../SharedContext/LogInterface";


export class JogoConsoleRepository implements JogoInterface {

    private objLogService : LogInterface;

    // este inject é necessário para que o DI saiba qual interface concreta será construida
    public static inject = ['LogInterface'] as const;

    constructor(iLogInterface : LogInterface) {
        this.objLogService = iLogInterface
    }

    iniciarJogo() : void {
        this.objLogService.logarTexto('Jogo iniciado');
    }

    reiniciarJogo(): void {
        this.objLogService.logarTexto('Jogo reiniciado');
    }

    verMenuInicial(): void {
        this.objLogService.logarTexto('Mostrar menu inicial');
    }

    verTelaPontuacao(): void {
        this.objLogService.logarTexto('Mostrar tela de pontuação');
    }
}
