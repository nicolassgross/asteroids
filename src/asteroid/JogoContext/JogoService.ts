import { JogoInterface } from "./JogoInterface";
import { LogService } from "../SharedContext/LogService";


export class JogoService implements JogoInterface {

    private objJogoRepositoy : JogoInterface;

    constructor(iJogoInterface : JogoInterface) {
        this.objJogoRepositoy = iJogoInterface
    }

    iniciarJogo() : void {
        this.objJogoRepositoy.iniciarJogo();
    }

    reiniciarJogo(): void {
        this.objJogoRepositoy.reiniciarJogo();
    }

    verMenuInicial(): void {
        this.objJogoRepositoy.verMenuInicial();
    }

    verTelaPontuacao(): void {
        this.objJogoRepositoy.verTelaPontuacao();
    }
}
