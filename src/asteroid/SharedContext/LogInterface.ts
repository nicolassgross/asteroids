export interface LogInterface {
    logarTexto(str : string) : void;
    addMensagem(str : string) : void;
    getMensagens() : Array<String>;
    limparLog() : void;
}