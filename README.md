# OBJETIVO

- Desenvolver um jogo chamado asteroids utilizando javascript com controles pelo teclado.

# Motivação 

- Aprimorar conhecimentos de lógica;
- Praticar conceitos que talvez não vemos no dia a dia; 
- Trabahar com calculos de posição;
- Saber se conseguimos utilizar DDD para criar a base de código do jogo;
- Conseguir jogar o jogo que criamos;
- Disponibilizar o jogo para os demais membros da equipe.

# DDD - Asteroids

## Descrição do produto:

- Jogo que tem como objetivo não ser atingido pelos multiplos asteroids que se movimentam pela tela. 
Também é possível atirar nos asteroids para quebrá-los ganhando pontos. Todo asteroide atingido
é divido em 2 partes e após uma das duas partes ser atingida, vira uma menor.
O tiro não chega até o final da tela e é possível movimentar a nave nas arrows do teclado.
Ao passar do limite da tela com a nave, ela aparece no lado oposto de onde atravessou, e tiro segue o mesmo comportamento.

## Mapa de ações

- Iniciar o jogo;
- Reiniciar o jogo;
- Atirar;
- Movimentar a nave para frente(acelerar);
- Girar a nave nos dois sentidos(horário e anti-horário);
- Alerar o modo de jogo;

## Usuários 

## Línguagem ubiqua

- Asteroide: Objeto em formato de pedra que se move aleatóriamente na tela;
- Nave: O que o jogador controla com as arrows do teclado, ela tem o formato triângular;
- Acelerar a nave: Aumentar a velocidade de para onde a ponta da nave está apontada;
## Mapa de contexto

## Entidades

- Jogador/Nave:
    Quantidade de vidas;

## Requisitos funcionais

## Regras de negócio

