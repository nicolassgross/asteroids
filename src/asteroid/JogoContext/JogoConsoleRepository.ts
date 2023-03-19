import { JogoInterface } from "./JogoInterface";
import { LogService } from "../SharedContext/LogService";


export class JogoConsoleRepository implements JogoInterface {
    iniciarJogo() : void {
        LogService.logarTexto('Jogo iniciado');
    }

    reiniciarJogo(): void {
        LogService.logarTexto('Jogo reiniciado');
    }

    verMenuInicial(): void {
        LogService.logarTexto('Mostrar menu inicial');
    }

    verTelaPontuacao(): void {
        LogService.logarTexto('Mostrar tela de pontuação');
    }
}
