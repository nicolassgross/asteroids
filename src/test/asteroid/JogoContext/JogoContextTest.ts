import { expect } from 'chai';

import { JogoService } from "../../../asteroid/JogoContext/JogoService";
import { LogService } from "../../../asteroid/SharedContext/LogService";

describe('Teste do contexto do Jogo', () => {
    it('Teste do Serviço Jogo', () => {
        let objJogoService = new JogoService();
        objJogoService.iniciarJogo();


        let arrMensagens = LogService.getMensagens();
        expect(arrMensagens).to.be.equal(
            [
                'Log iniciado'
                , 'Jogo iniciado'
            ]
        );
    });
});