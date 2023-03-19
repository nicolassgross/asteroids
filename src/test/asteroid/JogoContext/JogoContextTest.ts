import { expect } from 'chai';

import { JogoService } from "../../../asteroid/JogoContext/JogoService";
import { LogService } from "../../../asteroid/SharedContext/LogService";

describe('Teste do contexto do Jogo', () => {
    it('Teste do Serviço Jogo', () => {
        let objJogoService = new JogoService();
        objJogoService.iniciarJogo();
        objJogoService.reiniciarJogo();
        objJogoService.verMenuInicial();
        objJogoService.verTelaPontuacao();

        let arrMensagens = LogService.getMensagens();

        expect(arrMensagens).to.deep.equal(
            [
                'Log iniciado'
                , 'Jogo iniciado'
                , 'Jogo reiniciado'
                , 'Mostrar menu inicial'
                , 'Mostrar tela de pontuação'
            ]
        );
    });
});