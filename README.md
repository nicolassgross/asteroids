# OBJETIVO

- Desenvolver um jogo chamado asteroids utilizando javascript com controles pelo teclado;

# Motivação

- Aprimorar conhecimentos de lógica;
- Praticar conceitos que talvez não vemos no dia a dia;
- Trabahar com calculos de posição;
- Saber se conseguimos utilizar DDD para criar a base de código do jogo;
- Conseguir jogar o jogo que criamos;
- Disponibilizar o jogo para os demais membros da equipe.

# Convenção de desenvolvimento

- Vamos manter os nomes em português para não confundir os termos do jogo com os termos do DDD
    - DDD em ingles
    - Domínio do jogo em Portugues

- Nome das pastas e arquivos no singular (a não ser que seja uma exceção)

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

 - Nave
 - Asteroides
 - Sistema de Pontuação
 - Jogo
    - Telas do Jogo
    - Controles do Jogo
    - Sistema de Controle de Tempo

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
    - Seleção de dificuldade;
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

- Permitir atirar nos asteroides, destruir eles


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

- Sistema de jogo:
    - Ao iniciar o jogo o usuário deve escolher o nível de dificuldade
    - Após perder todas as vidas, o jogo deve ser finalizado e deve ser exibida a tela para digitação do nome
    - Após digitar o nome e confirmar, exibir a tela de score/pontuação

## Issue List

- Done - criar o arquivo .gitignore
- Done - iniciado projeto typescript
- Done - Criar a pasta "src"
- Done - Adicionar um sistema de unit de test
- Done - Criar as pastas de modulos para cada MAPA DE CONTEXTO - "src/asteroid/context"
- Done - Criar as entidades dentro dos modulos e criar as fábricas necessárias (manter unit-test)
- Done - Criar os serviços dentro dos modulos fazendo mapeamento dos requisitos funcionais
- Criar um sistema de injeção de dependencias
- Programar as regras de negócios

## Definições

- Context
    - Pastas que contem os contextos do jogo conforme definido no DDD
- SharedContext
    - Pasta que contem contem arquivos que podem ser usado por vários contextos

## comandos executados

- criar novo projeto typescript
    - npm i typescript --save-dev
    - npx tsc --init
    - npm i typed-inject --save-dev

- instalando test framework
    - npm i chai --save-dev
    - npm install chai mocha ts-node @types/chai @types/mocha --save-dev

- compilando
    - npx tsc
    - npx tsc -w (compilar em tempo real)

- test-framework
    - npm test