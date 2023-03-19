import { expect } from 'chai';
import { createInjector } from 'typed-inject';

import { NaveEntity } from "../../../asteroid/NaveContext/NaveEntity";
import { NaveFactory } from "../../../asteroid/NaveContext/NaveFactory";
import { NaveService } from "../../../asteroid/NaveContext/NaveService";
import { NaveConsoleRepository } from "../../../asteroid/NaveContext/NaveConsoleRepository";
import { LogService } from "../../../asteroid/SharedContext/LogService";

describe('Teste do contexto da Nave', () => {
    it('Teste da Entidade', () => {
        let objNaveEntity = new NaveEntity(10);
        expect(objNaveEntity.getVelocidade()).to.be.equal(10);
    });

    it('Teste da Fabrica', () => {
        let objNaveFactory = new NaveFactory();
        let objNaveEntity = objNaveFactory.criarNave();
        expect(objNaveEntity).to.be.an.instanceof(NaveEntity);
    });

    it('Teste do Serviço Nave', () => {
        const appInjector = createInjector()
            .provideClass('NaveConcreteRepository', NaveConsoleRepository);

        let objNaveService = new NaveService(
            appInjector.resolve('NaveConcreteRepository')
        );

        LogService.limparLog();

        objNaveService.acelerar();
        objNaveService.girarParaEsquerda();
        objNaveService.girarParaDireita();
        objNaveService.atirar();
        objNaveService.explodirNave();

        let arrMensagens = LogService.getMensagens();

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
    });
});