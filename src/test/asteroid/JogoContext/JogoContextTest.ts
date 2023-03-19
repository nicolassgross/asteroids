import { expect } from 'chai';
import { createInjector } from 'typed-inject';

import { JogoService } from "../../../asteroid/JogoContext/JogoService";
import { JogoInterface } from "../../../asteroid/JogoContext/JogoInterface";
import { JogoConsoleRepository } from "../../../asteroid/JogoContext/JogoConsoleRepository";
import { LogService } from "../../../asteroid/SharedContext/LogService";

describe('Teste do contexto do Jogo', () => {
    it('Teste do Serviço Jogo', () => {
        const appInjector = createInjector()
            .provideClass('JogoRepository', JogoConsoleRepository);

        let objJogoService = new JogoService(
            appInjector.resolve('JogoRepository')
        );

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