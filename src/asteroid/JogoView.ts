import * as Phaser from 'phaser';
import JogoController from './JogoController';
import { NaveEntity } from './NaveContext/NaveEntity';

export class JogoView
{
    objScene : JogoController;
    naveModel : NaveEntity;

    constructor (
        objScene : JogoController
    ) {
        this.objScene = objScene;
        this.naveModel = objScene.objNaveService.getEntity();
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

    atualizarPosicaoNave(
        tamanho_mapa_x : number,
        tamanho_mapa_y : number
    ) {
        this.objScene.objGameObjectNave.x = this.naveModel.posicao_x;
        this.objScene.objGameObjectNave.y = this.naveModel.posicao_y;

        // movimentação e rotação
        this.objScene.objGameObjectNave.setRotation(
            this.naveModel.direcao_em_graus
        );

        this.objScene.objGameObjectNaveCopy.setRotation(
            this.naveModel.direcao_em_graus
        );

        this.objScene.objGameObjectNave.x += Math.cos(this.naveModel.direcao_em_graus) * this.naveModel.velocidade;
        this.objScene.objGameObjectNave.y += Math.sin(this.naveModel.direcao_em_graus) * this.naveModel.velocidade;

        this.objScene.objGameObjectNaveCopy.x += Math.cos(this.naveModel.direcao_em_graus) * this.naveModel.velocidade;
        this.objScene.objGameObjectNaveCopy.y += Math.sin(this.naveModel.direcao_em_graus) * this.naveModel.velocidade;

        // atualiza o model
        this.naveModel.posicao_x = this.objScene.objGameObjectNave.x;
        this.naveModel.posicao_y = this.objScene.objGameObjectNave.y;


        // objeto de copia
        const tamanho_nave = this.naveModel.tamanho_x;

        // saida a direita
        if (this.objScene.objGameObjectNave.x >= tamanho_mapa_x - tamanho_nave) {
            this.objScene.objGameObjectNaveCopy.x = this.objScene.objGameObjectNave.x - tamanho_mapa_x;
        }

        // saida a esquerda
        if (this.objScene.objGameObjectNave.x <= (0 + tamanho_nave)) {
            this.objScene.objGameObjectNaveCopy.x = this.objScene.objGameObjectNave.x + tamanho_mapa_x;
        }

        // saida a baixo
        if (this.objScene.objGameObjectNave.y >= tamanho_mapa_y - tamanho_nave) {
            this.objScene.objGameObjectNaveCopy.y = this.objScene.objGameObjectNave.y - tamanho_mapa_y;
        }

        // saida a acima
        if (this.objScene.objGameObjectNave.y <= (0 + tamanho_nave)) {
            this.objScene.objGameObjectNaveCopy.y = this.objScene.objGameObjectNave.y + tamanho_mapa_y;
        }




    }

    atualizarPosicaoTiros(
        tamanho_mapa_x : number,
        tamanho_mapa_y : number
    ) {
        const arrProjeteisModel = this.objScene
            .objProjetilService
            .getArrProjeteis();

        const objGraphic = this.objScene
            .objGameObjectProjetilContainer
            .getChildren();

        // apaga tudo
        objGraphic[0].destroy();
        objGraphic[0] = this.objScene.add.graphics();

        arrProjeteisModel.forEach(objProjetilEntity => {
            objGraphic[0].fillStyle(0x9966ff, 1);

            objGraphic[0].fillCircle(
                objProjetilEntity.posicao_x,
                objProjetilEntity.posicao_y,
                3,
                0x6666ff
            );
        });
    }
}