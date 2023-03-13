import { JogoInterface } from "./JogoInterface";
import { LogService } from "../SharedContext/LogService";


export class JogoService implements JogoInterface {
    iniciarJogo() : void {
        LogService.logarTexto('Jogo iniciado');
    }
}
