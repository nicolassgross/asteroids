import { LogInterface } from "./LogInterface";

export class LogService  implements LogInterface {
    private arrMensagens : Array<String> = ["Log iniciado"];

    public logarTexto(str : string) : void {
        this.addMensagem(str);
        console.log(str);
    }

    public addMensagem(str : string) : void {
        this.arrMensagens.push(str);
    }

    public getMensagens() : Array<String> {
        return this.arrMensagens;
    }

    public limparLog() : void {
        this.arrMensagens = ["Log iniciado"];
    }
}
