import { expect } from 'chai';
import { createInjector } from 'typed-inject';

import { AsteroidTestFactory } from "../AsteroidTestFactory";

import { NaveEntity } from "../../../asteroid/NaveContext/NaveEntity";
import { NaveFactory } from "../../../asteroid/NaveContext/NaveFactory";
import { NaveService } from "../../../asteroid/NaveContext/NaveService";
import { NaveConsoleRepository } from "../../../asteroid/NaveContext/NaveConsoleRepository";

describe('Teste do contexto da Nave', () => {
    it('Teste da Entidade', () => {
        let objNaveEntity = new NaveEntity(0, 0, 0, 0);

        const { velocidade, posicao_x, posicao_y, direcao_em_graus } = objNaveEntity;

        expect(velocidade).to.be.equal(0);
        expect(posicao_x).to.be.equal(0);
        expect(posicao_y).to.be.equal(0);
        expect(direcao_em_graus).to.be.equal(0);
    });

    it('Teste da Fabrica', () => {
        let objNaveFactory = new NaveFactory();
        let objNaveEntity = objNaveFactory.criarNave();
        expect(objNaveEntity).to.be.an.instanceof(NaveEntity);
    });

    it('Teste do Serviço Nave', () => {
        const objAsteroidTestFactory = new AsteroidTestFactory();
        const appInjector = objAsteroidTestFactory.criarAppInjector();
        const objLogService = appInjector.resolve('LogInterface');

        let objNaveService = new NaveService(
            appInjector.resolve('NaveConcreteRepository')
        );

        objLogService.limparLog();

        objNaveService.acelerar();
        objNaveService.girarParaEsquerda();
        objNaveService.girarParaDireita();
        objNaveService.atirar();
        objNaveService.explodirNave();

        let arrMensagens = objLogService.getMensagens();

        expect(arrMensagens).to.deep.equal(
            [
                'Log iniciado'
                , 'Nave acelerando'
                , 'Nave girando para a esquerda'
                , 'Nave girando para a direita'
                , 'Nave atirando'
                , 'Nave explodiu'
            ]
        );

        const { velocidade, posicao_x, posicao_y, direcao_em_graus } = objNaveService.getNaveEntity();
        expect(velocidade).to.be.equal(1);
        expect(posicao_x).to.be.equal(0);
        expect(posicao_y).to.be.equal(0);
        expect(direcao_em_graus).to.be.equal(0);
    });
});