import * as Phaser from 'phaser';

import { createInjector, Injector } from 'typed-inject';

import { JogoConsoleRepository } from "./JogoContext/JogoConsoleRepository";
import { NaveConsoleRepository } from "./NaveContext/NaveConsoleRepository";
import { ProjetilConsoleRepository } from './NaveContext/ProjetilConsoleRepository';


import { LogService } from './SharedContext/LogService';
import { NaveService } from './NaveContext/NaveService';
import { ProjetilService } from './NaveContext/ProjetilService';

// camada de visao
import { JogoView } from "./JogoView";


const TAMANHO_MAPA_X = 800;
const TAMANHO_MAPA_Y = 600;


export default class JogoController extends Phaser.Scene
{
    // inicio logica de negocio

    // injetor de DI
    appInjector : Injector<any>;

    // servico nave
    objNaveService : NaveService;

    objProjetilService : ProjetilService;


    // inicio logica phaser

    // responsavel pela visao - renderizacao dos objetos
    objJogoView : JogoView;

    // objeto teclado
    objKeyBidding : any;

    // representa a nave a ser renderizada
    objGameObjectNave: any;

    // temos uma copia da nave qndo ela passa pela tela
    objGameObjectNaveCopy: any;

    teste : any;

    constructor ()
    {
        super('JogoController');
        this.appInjector = this.criarAppInjector();

        // recupera o repositorio da nave para injetar no serviço
        const objNaveConcreteRepository = this.appInjector.resolve('NaveConcreteRepository');
        const objProjetilConcreteRepository = this.appInjector.resolve('ProjetilConcreteRepository');

        this.objNaveService = new NaveService(objNaveConcreteRepository);
        this.objProjetilService = new ProjetilService(objProjetilConcreteRepository);

        // cria o objeto de renderizacao
        this.objJogoView = new JogoView(
            this,
            this.objNaveService.getEntity()
        );
    }

    // cria as nossas instancias atraves do DI
    criarAppInjector()  {
        const appInjector = createInjector()
            .provideClass('LogInterface', LogService)
            .provideClass('JogoConcreteRepository', JogoConsoleRepository)
            .provideClass('ProjetilConcreteRepository', ProjetilConsoleRepository)
            .provideClass('NaveConcreteRepository', NaveConsoleRepository);


        return appInjector;
    }

    preload ()
    {

    }

    create ()
    {
        this.objGameObjectNave = this.objJogoView.criarNave();
        this.objGameObjectNaveCopy = this.objJogoView.criarNave();
    }

    update ()
    {
        this.objKeyBidding = this.input.keyboard?.createCursorKeys();

        if (this.objKeyBidding.up.isDown) {
            this.objNaveService.acelerar();
        }

        if (this.objKeyBidding.down.isDown) {
            this.objNaveService.desacelerar();
            this.objNaveService.desacelerar();
            this.objNaveService.desacelerar();
        }

        if (this.objKeyBidding.right.isDown) {
            this.objNaveService.girarParaDireita();
        }

        if (this.objKeyBidding.left.isDown) {
            this.objNaveService.girarParaEsquerda();
        }

        if (this.objKeyBidding.space.isDown) {
            this.objNaveService.atirar();

            this.objProjetilService.novoProjetil(
                this.objNaveService.getEntity(),
                1, 0
            );

            // this.teste = this.add.graphics();
            // this.teste.setInteractive();
            // this.teste.fillStyle(0x9966ff, 1);
            // this.teste.fillCircle(10, 10, 3, 0x6666ff);
            if (this.teste == undefined) {
                this.teste = this.add.group([this.add.graphics()]);
                const invaders = this.teste.getChildren();
                invaders[0].fillStyle(0x9966ff, 1);
                invaders[0].fillCircle(10, 10, 3, 0x6666ff);
            } else {
                const invaders = this.teste.getChildren();
                console.log(invaders);

                if (invaders && invaders[0] != undefined) {
                    console.log(invaders);
                }

                if (invaders.length == 0) {
                    this.teste.add(this.add.graphics());
                    const invaders = this.teste.getChildren();
                    invaders[0].fillStyle(0x9966ff, 1);
                    invaders[0].fillCircle(10, 10, 3, 0x6666ff);
                }
                // this.teste.create(0, 0);
                // const invaders = this.teste.getChildren();
                // // invaders.push(this.add.graphics());
                // invaders[0].fillStyle(0x9966ff, 1);
                // invaders[0].fillCircle(10, 10, 3, 0x6666ff);
            }

            // this.teste = this.make.group({
            //     key: 'diamonds'
            //     // frame: [ 0, 1, 2, 3, 4 ],
            //     // frameQuantity: 22,
            //     // max: 108
            // });

            // // this.teste.add.graphic();
            // this.teste



        }

        if (this.objKeyBidding.shift.isDown) {
            console.log('aqui a 1 2' );
            const invaders2 = this.teste.getChildren();
            // this.teste.destroy();
            console.log(invaders2);
            if (invaders2 && invaders2[0] != undefined) {
                console.log('entrou aqui');
                // invaders2[0].setVisible(false)
                // invaders2[0].setActive(false).setVisible(false);
                // invaders2[0].clear(true);
                invaders2[0].destroy();

                // invaders2[0].fillStyle(0x9966ff, 1);
                // invaders2[0].fillCircle(100, 100, 32, 0x6666ff);
            }

            // this.teste = undefined;

        }

        // sempre desacelera a nave
        this.objNaveService.desacelerar();


        this.objNaveService.verificarSaidaCenario(
            this.sys.game.canvas.width,
            this.sys.game.canvas.height
        );

        // atualiza posicao da nave
        this.objJogoView.atualizarPosicaoNave(
            this.sys.game.canvas.width,
            this.sys.game.canvas.height
        );

        this.objProjetilService.moverProjeteis();
        this.objProjetilService.verificarLimite(100);
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    width: TAMANHO_MAPA_X,
    height: TAMANHO_MAPA_Y,
    scene: JogoController
};

const game = new Phaser.Game(config);