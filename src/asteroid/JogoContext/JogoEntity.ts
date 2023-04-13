export class JogoEntity {
    vidas: number;
    pontos: number;
    tempo_inicio_jogo: Date;
    tempo_fim_jogo?: Date;

    constructor(vida_inicial : number) {
        this.vidas = vida_inicial;
        this.pontos = 0;
        this.tempo_inicio_jogo = new Date();
        this.tempo_fim_jogo = undefined;
    }

    getVidas() : number {
        return this.vidas;
    }

    setTempoFimJogo() : void {
        this.tempo_fim_jogo = new Date();
    }

    getTempoJogo() : number {
        if (this.tempo_fim_jogo != undefined) {
            let diff = this.tempo_inicio_jogo.getTime() - this.tempo_fim_jogo.getTime();
            let seconds_from_t1_to_t2 = diff / 1000;
            let seconds_between_dates = Math.abs(seconds_from_t1_to_t2);

            return seconds_between_dates;
        }

        return 0;
    }
}