import * as Phaser from 'phaser';



import { createInjector, Injector } from 'typed-inject';

import { JogoConsoleRepository } from "./JogoContext/JogoConsoleRepository";
import { NaveConsoleRepository } from "./NaveContext/NaveConsoleRepository";
import { ProjetilConsoleRepository } from './NaveContext/ProjetilConsoleRepository';

import { LogService } from './SharedContext/LogService';
import { NaveService } from './NaveContext/NaveService';

// camada de visao
import { JogoView } from "./JogoView";


export default class JogoController extends Phaser.Scene
{
    // injetor de DI
    appInjector : Injector<any>;

    objJogoView : JogoView;
    objNaveService : NaveService;


    // x : number;
    // y : number;
    objKeyBidding : any;
    // triangle: any;

    // todo - alterar esse nome do objeto para nao confundir
    objGameObjectNave: any;
    // triangle_copy : any;

    constructor ()
    {
        super('JogoController');
        this.appInjector = this.criarAppInjector();

        const objNaveConcreteRepository = this.appInjector.resolve('NaveConcreteRepository');

        this.objNaveService = new NaveService(objNaveConcreteRepository);

        // const appInjector = objAsteroidTestFactory.criarAppInjector();
        // const objLogService = appInjector.resolve('LogInterface');
        // this.x = this.y = 10;

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

        // this.x = this.y = 10;

        this.objGameObjectNave = this.objJogoView.criarNave();

        // this.triangle_copy = this.objJogoView.criarNave();

    }

    update ()
    {
        // let triangle = this.add.triangle(200, 200, 0, 148, 148, 148, 74, 0, 0x6666ff);

        // this.graphic
        //     .clear()
        //     .strokeCircle(this.x, 10, 10);

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

        // atualiza posicao da nave
        this.objJogoView.atualizarPosicaoNave();

        // if (this.triangle.x >= 800) {
        //     this.triangle_copy.x = this.triangle.x - 800;
        // }

        // if (this.triangle.x >= (800 + 200)) {
        //     this.triangle.x = 200;
        // }

        // if (this.triangle.x <= 0) {
        //     this.triangle_copy.x = this.triangle.x + 800;
        // }

        // if (this.triangle.x <= (0 - 200) ) {
        //     this.triangle_copy.x = this.triangle.x + 800;
        //     this.triangle.x = 800 - 200;
        // }


    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    width: 800,
    height: 600,
    scene: JogoController
};

const game = new Phaser.Game(config);