// import { NaveEntity } from "./NaveEntity";

export class LogService {
    private static  arrMensagens : Array<String> = ["Log iniciado"];

    public static logarTexto(str : string) : void {
        LogService.addMensagem(str);
        console.log(str);
    }

    public static addMensagem(str : string) : void {
        this.arrMensagens.push(str);
    }

    public static getMensagens() : Array<String> {
        return this.arrMensagens;
    }

    public static limparLog() : void {
        this.arrMensagens = ["Log iniciado"];
    }
}
