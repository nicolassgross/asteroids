import { LogService } from "../SharedContext/LogService";

export class JogoService {
    iniciarJogo() : void {
        LogService.logarTexto('Jogo iniciado');
    }
}
