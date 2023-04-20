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
        return this.objScene.add.triangle(
            this.naveModel.posicao_x,
            this.naveModel.posicao_y,
            0,
            this.naveModel.tamanho_x,
            this.naveModel.tamanho_x,
            this.naveModel.tamanho_y,
            this.naveModel.tamanho_y / 2,
            0,
            0x6666ff
        );
    }

    atualizarPosicaoNave()
    {

        this.objScene.objNaveView.x = this.naveModel.direcao_em_graus;
        // this.objScene.objNaveView.y = this.objScene.objNaveView.y + y;
    }

}