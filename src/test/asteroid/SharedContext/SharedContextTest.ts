import { expect } from 'chai';
import { createInjector } from 'typed-inject';
import { ComponenteEntity } from '../../../asteroid/SharedContext/ComponenteEntity';

import { AsteroidTestFactory } from "../AsteroidTestFactory";


describe('Teste do contexto Shared', () => {
    it('Teste da Entidade', () => {
        let objComponenteEntity = new ComponenteEntity(
            0,
            0,
            0,
            0,
            0,
            0
            );

        const {
            velocidade,
            posicao_x,
            posicao_y,
            tamanho_x,
            tamanho_y,
            direcao_em_graus
        } = objComponenteEntity;

        expect(velocidade).to.be.equal(0);
        expect(posicao_x).to.be.equal(0);
        expect(posicao_y).to.be.equal(0);
        expect(tamanho_x).to.be.equal(0);
        expect(tamanho_y).to.be.equal(0);
        expect(direcao_em_graus).to.be.equal(0);
    });

});