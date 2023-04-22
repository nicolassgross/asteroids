import * as Phaser from 'phaser';

import { createInjector, Injector } from 'typed-inject';

import { JogoConsoleRepository } from "./JogoContext/JogoConsoleRepository";
import { NaveConsoleRepository } from "./NaveContext/NaveConsoleRepository";
import { ProjetilConsoleRepository } from './NaveContext/ProjetilConsoleRepository';

import { LogService } from './SharedContext/LogService';
import { NaveService } from './NaveContext/NaveService';

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



    // inicio logica phaser

    // responsavel pela visao - renderizacao dos objetos
    objJogoView : JogoView;

    // objeto teclado
    objKeyBidding : any;

    // representa a nave a ser renderizada
    objGameObjectNave: any;

    // temos uma copia da nave qndo ela passa pela tela
    objGameObjectNaveCopy: any;

    constructor ()
    {
        super('JogoController');
        this.appInjector = this.criarAppInjector();

        // recupera o repositorio da nave para injetar no serviço
        const objNaveConcreteRepository = this.appInjector.resolve('NaveConcreteRepository');

        this.objNaveService = new NaveService(objNaveConcreteRepository);

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
            .provideClass('NaveConcreteRepository', NaveConsoleRepository)
            .provideClass('ProjetilConcreteRepository', ProjetilConsoleRepository);

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

        // sempre desacelera a nave
        this.objNaveService.desacelerar();

        console.log(this.sys.game.canvas.width);

        this.objNaveService.verificarSaidaCenario(
            this.sys.game.canvas.width,
            this.sys.game.canvas.height
        );

        // atualiza posicao da nave
        this.objJogoView.atualizarPosicaoNave();
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