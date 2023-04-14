import * as Phaser from 'phaser';

export default class Demo extends Phaser.Scene
{
    graphic : Phaser.GameObjects.Graphics;
    x : number;
    y : number;
    cursors : any;

    constructor ()
    {
        super('demo');
        this.x = this.y = 10;
        // this.cursors = this.input.keyboard?.createCursorKeys();
        this.graphic = this.add.graphics({ lineStyle: { color: 0x00ffff } });

    }

    preload ()
    {

    }

    create ()
    {

        this.x = this.y = 10;
    }

    update ()
    {
        this.graphic
            .clear()
            .strokeCircle(this.x, 10, 10);

        // if (this.cursors.right.isDown) {
        //     this.x += 1;
        // }
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