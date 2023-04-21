import * as Phaser from 'phaser';
import JogoController from './JogoController';
import { NaveEntity } from './NaveContext/NaveEntity';

export class JogoView
{
    objScene : JogoController;
    naveModel : NaveEntity;

    constructor (
        objScene : JogoController,
        objNaveEntity : NaveEntity
    )
    {
        this.objScene = objScene;
        this.naveModel = objNaveEntity;
    }

    criarNave()
    {
        // console.log("criacao : " + this.naveModel.posicao_x);
        return this.objScene.add.triangle(
            // 200, 200, 0, 50, 50, 50, 25,
            this.naveModel.posicao_x,
            this.naveModel.posicao_y,
            0, // esquerda baixo
            this.naveModel.tamanho_y, // esquerda baixo

            this.naveModel.tamanho_x + 10,
            this.naveModel.tamanho_y / 2, // direita baixo

            0, // cima,
            0, // cima
            0x6666ff
        );
    }

    atualizarPosicaoNave()
    {
        this.objScene.objGameObjectNave.setRotation(
            this.naveModel.direcao_em_graus
        );

        this.objScene.objGameObjectNave.x += Math.cos(this.naveModel.direcao_em_graus) * this.naveModel.velocidade;
        this.objScene.objGameObjectNave.y += Math.sin(this.naveModel.direcao_em_graus) * this.naveModel.velocidade;
    }

}