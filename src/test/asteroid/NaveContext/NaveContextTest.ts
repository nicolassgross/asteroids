import { expect } from 'chai';

import { NaveEntity } from "../../../asteroid/NaveContext/NaveEntity";
import { NaveFactory } from "../../../asteroid/NaveContext/NaveFactory";

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
});