import { expect } from 'chai';
import { createInjector } from 'typed-inject';

import { JogoConsoleRepository } from "../../asteroid/JogoContext/JogoConsoleRepository";
import { NaveConsoleRepository } from "../../asteroid/NaveContext/NaveConsoleRepository";
import { ProjetilConsoleRepository } from '../../asteroid/NaveContext/ProjetilConsoleRepository';
import { LogService } from '../../asteroid/SharedContext/LogService';

export class AsteroidTestFactory {
    criarAppInjector()  {
        const appInjector = createInjector()
            .provideClass('LogInterface', LogService)
            .provideClass('JogoConcreteRepository', JogoConsoleRepository)
            .provideClass('NaveConcreteRepository', NaveConsoleRepository)
            .provideClass('ProjetilConcreteRepository', ProjetilConsoleRepository);

        return appInjector;
    }
}