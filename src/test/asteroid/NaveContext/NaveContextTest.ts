import { expect } from 'chai';
import { createInjector } from 'typed-inject';

import { AsteroidTestFactory } from "../AsteroidTestFactory";

import { NaveEntity } from "../../../asteroid/NaveContext/NaveEntity";
import { NaveFactory } from "../../../asteroid/NaveContext/NaveFactory";
import { NaveService } from "../../../asteroid/NaveContext/NaveService";
import { ProjetilEntity } from '../../../asteroid/NaveContext/ProjetilEntity';
import { ProjetilService } from '../../../asteroid/NaveContext/ProjetilService';


describe('Teste do contexto da Nave', () => {
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

        const { velocidade, posicao_x, posicao_y, direcao_em_graus } = objNaveService.getEntity();
        expect(velocidade).to.be.equal(1);
        expect(posicao_x).to.be.equal(0);
        expect(posicao_y).to.be.equal(0);
        expect(direcao_em_graus).to.be.equal(0);
    });

    it('Teste do Serviço do Projetil', () => {
        const objAsteroidTestFactory = new AsteroidTestFactory();
        const appInjector = objAsteroidTestFactory.criarAppInjector();
        const objLogService = appInjector.resolve('LogInterface');

        let objProjetilService = new ProjetilService(
            appInjector.resolve('ProjetilConcreteRepository')
        );

        let objNaveService = new NaveService(
            appInjector.resolve('NaveConcreteRepository')
        );


        objLogService.limparLog();

        objProjetilService.novoProjetil(objNaveService.getEntity());
        objProjetilService.novoProjetil(objNaveService.getEntity());
        objProjetilService.moverProjeteis();

        let arrMensagens = objLogService.getMensagens();

        expect(arrMensagens).to.deep.equal(
            [
                'Log iniciado'
                , 'Novo Projetil Criado'
                , 'Novo Projetil Criado'
                , 'Todos os projéteis movidos para frente'
            ]
        );
    });
});