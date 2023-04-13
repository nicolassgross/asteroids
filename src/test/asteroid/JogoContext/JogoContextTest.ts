import { expect } from 'chai';
import { createInjector } from 'typed-inject';

import { AsteroidTestFactory } from "../AsteroidTestFactory";

import { JogoService } from "../../../asteroid/JogoContext/JogoService";
import { JogoEntity } from "../../../asteroid/JogoContext/JogoEntity";

describe('Teste do contexto do Jogo', () => {
    it('Teste da Entidade', () => {
        let objJogoEntity = new JogoEntity(10);
        expect(objJogoEntity.getVidas()).to.be.equal(10);
        expect(objJogoEntity.getTempoJogo()).to.be.equal(0);
    });

    it('Teste do Serviço Jogo', () => {
        const objAsteroidTestFactory = new AsteroidTestFactory();
        const appInjector = objAsteroidTestFactory.criarAppInjector();
        const objLogService = appInjector.resolve('LogInterface');

        let objJogoService = new JogoService(
            appInjector.resolve('JogoConcreteRepository')
        );

        objLogService.limparLog();

        objJogoService.iniciarJogo();
        objJogoService.reiniciarJogo();
        objJogoService.verMenuInicial();
        objJogoService.verTelaPontuacao();

        let arrMensagens = objLogService.getMensagens();

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