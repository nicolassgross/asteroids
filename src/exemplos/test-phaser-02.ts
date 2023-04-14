import * as Phaser from 'phaser';

// imprimindo um triangulo na tela que pode ser movido para a esquerda e para a direita

export default class Demo extends Phaser.Scene
{

    x : number;
    y : number;
    cursors : any;
    triangle: any;

    constructor ()
    {
        super('demo');
        this.x = this.y = 10;
        // this.graphic = this.add.graphics({ lineStyle: { color: 0x00ffff } });

        // this.triangle = this.add.triangle(200, 200, 0, 148, 148, 148, 74, 0, 0x6666ff);

    }

    preload ()
    {

    }

    create ()
    {

        this.x = this.y = 10;

        this.triangle = this.add.triangle(200, 200, 0, 148, 148, 148, 74, 0, 0x6666ff);

    }

    update ()
    {
        // let triangle = this.add.triangle(200, 200, 0, 148, 148, 148, 74, 0, 0x6666ff);

        // this.graphic
        //     .clear()
        //     .strokeCircle(this.x, 10, 10);
        this.cursors = this.input.keyboard?.createCursorKeys();

        if (this.cursors.right.isDown) {
            //  this.triangle.body.position.y += 10;
            console.log(this.triangle.x += 10);
        }

        if (this.cursors.left.isDown) {
            //  this.triangle.body.position.y += 10;
            console.log(this.triangle.x -= 10);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    width: 800,
    height: 600,
    scene: Demo
};

const game = new Phaser.Game(config);