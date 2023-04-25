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

    // container que vai tratar os tiros
    objGameObjectProjetilContainer : any;

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
            this
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
        // cria um container (group) e adiciona um graphics
        this.objGameObjectProjetilContainer = this.add.group([this.add.graphics()]);
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

        this.objJogoView.atualizarPosicaoTiros(
            this.sys.game.canvas.width,
            this.sys.game.canvas.height
        );

        this.objProjetilService.moverProjeteis();
        this.objProjetilService.verificarLimite(200);
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