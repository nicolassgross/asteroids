# OBJETIVO

- Desenvolver um jogo chamado asteroids utilizando javascript com controles pelo teclado;

# Motivação

- Aprimorar conhecimentos de lógica;
- Praticar conceitos que talvez não vemos no dia a dia;
- Trabahar com calculos de posição;
- Saber se conseguimos utilizar DDD para criar a base de código do jogo;
- Conseguir jogar o jogo que criamos;
- Disponibilizar o jogo para os demais membros da equipe.

# DDD - Asteroids

## Descrição do produto:

- Jogo que tem como objetivo não ser atingido pelos multiplos asteroids que se movimentam pela tela;
Também é possível atirar nos asteroids para quebrá-los ganhando pontos. Todo asteroide atingido;
é divido em 2 partes e após uma das duas partes ser atingida, vira uma menor;
O tiro não chega até o final da tela e é possível movimentar a nave nas arrows do teclado;
Ao passar do limite da tela com a nave, ela aparece no lado oposto de onde atravessou, e tiro segue o mesmo comportamento;

## Mapa de ações

- Iniciar o jogo;
- Reiniciar o jogo;
- Atirar;
- Movimentar a nave para frente (acelerar);
- Girar a nave nos dois sentidos (horário e anti-horário);
- Alterar o modo de jogo (fácil e difícil);

## Usuários

 - Jogador que controla a nave;

## Línguagem ubiqua

- Asteroide:
    - Objeto em formato de pedra que se move aleatóriamente na tela;
    - Ao ser atingido se divide em dois outros pedaços;

- Nave:
    - Objeto no formato triângular, que o jogador controla com as setas do teclado (arrows keys);

- Acelerar a nave:
    - Aumentar a velocidade de para onde a ponta da nave está apontada;

- Tiro:
    - Projétil disparado pela nave. Ele percore uma distância limitada e pode ser usado para destruir os asteroides;

- Pontuação / Score:
    - Quantidade de pontos ganhos ao destruir os meteoros;

## Mapa de contexto

 - Tela ou Cenário
 - Nave
 - Asteroides
 - Sistema de Pontuação
 - Sistema de tempo
 - Controle da Nave

## Entidades

- Partida (novo jogo)
    - Jogador;
    - Quantidade de vidas;
    - Pontuação do Jogador;
    - Tempo de jogo;

- Jogador/Nave:
    - Velocidade;
    - Direção;
    - X, Y (Posição na tela);
    - W, H (Tamanho altura, largura);

- Asteroide:
    - Velocidade;
    - Direção;
    - X, Y (Posição na tela);
    - W, H (Tamanho altura, largura);

- Telas/Menus do Jogo:
    - Tela inicial;
    - Tela de ação (jogo em si);
    - Tela de score final;
    - Tela de fim de jogo (game over);
## Requisitos funcionais

- Permitir visualizar a tela inicial do jogo com menu de ações;
    - Permitir iniciar um novo jogo;
    - Permitir ver o placar de melhores jogadores (score);
        - Exibir o nome, a pontuação obtida e o tempo de partida;

- Permitir controlar a nave através do teclado;
    - Para cima inicia a aceleração da nave;
    - Para a esquerda gira a nave no sentido anti-horário;
    - Para a direita gira a nave no sentido horário;
    - Espaço deve disparar tiros.

- Gerar asteroides randomicamente;


## Regras de negócio

- Deve existir dois modos de jogo:
    - Fácil
    - Difícil

- Nave / Jogador:
    - Ao chegar no final da tela, a nave deve ser transportada o lado oposto de onde atravesou
    - Os tiros devem seguir o mesmo comportamento da nave ao atravesar a tela.
    - A quantidade de tiros deve ser limitada;
    - A aceleração deve começar devagar e ir aumentando até um limite.
    - A desaceleração deve ser gradual.
    - Ao ser atingido por um asteroide, a nave deve explodir e o jogador perde uma vida.
    - O jogador começa com 3 vidas.

 - Asteroide:
    - Todo asteroide atingido é divido em 2 partes e após uma das duas partes ser atingida, vira uma menor.
        - Tocar um som quando isso acontecer.
        - Ao criar novas partes, essas partes devem ter aceleração e direção recalculadas.
    - A menor parte do asteroide some (desaparece) ao ser atingida.
        - Tocar um som diferente quando isso acontecer.
    - Com a adição de tempo, mais asteroides devem ser criado:
        - Fácil: gera um novo asteroide a cada 30 segudos.
        - Difícil: gera um novo asteroide a cada 15 segudos.
    - Os asteroides devem se mover conforme sua aceleração.
    - Se não existir nenhum asteroide na tela depois de 5 segundos, um novo deve ser criado.

- Sistema de pontuação:
    - Cada asteroide dividido e destruido vale 1 ponto;
    - O jogador mais bem rankeado é o que tiver mais pontos em um menor espaço de tempo;
    - Deve existir um sistema de pontuação diferente para os 2 níveis do jogo;
