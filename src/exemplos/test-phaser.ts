import * as Phaser from 'phaser';

export default class Demo extends Phaser.Scene
{

    x : number;
    y : number;
    cursors : any;
    triangle: any;
    triangle_copy : any;

    constructor ()
    {
        super('demo');
        this.x = this.y = 10;

        // this.triangle = new Phaser.GameObjects.Triangle(this, 200, 200, 0, 148, 148, 148, 74, 0, 0x6666ff);
        // this.triangle_copy = new Phaser.GameObjects.Triangle(this, 0);
        // constructor(scene: Phaser.Scene, x?: number, y?: number, x1?: number, y1?: number, x2?: number, y2?: number, x3?: number, y3?: number, fillColor?: number, fillAlpha?: number);
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
        this.triangle_copy = this.add.triangle(200, 200, 0, 148, 148, 148, 74, 0, 0x6666ff);

    }

    update ()
    {
        // let triangle = this.add.triangle(200, 200, 0, 148, 148, 148, 74, 0, 0x6666ff);

        // this.graphic
        //     .clear()
        //     .strokeCircle(this.x, 10, 10);
        this.cursors = this.input.keyboard?.createCursorKeys();

        if (this.cursors.right.isDown) {
            this.triangle.x += 10;
            this.triangle_copy.x += 10;
        }

        if (this.cursors.left.isDown) {
            this.triangle.x -= 10;
            this.triangle_copy.x -= 10;
        }

        if (this.triangle.x >= 800) {
            this.triangle_copy.x = this.triangle.x - 800;
        }

        if (this.triangle.x >= (800 + 200)) {
            this.triangle.x = 200;
        }

        if (this.triangle.x <= 0) {
            this.triangle_copy.x = this.triangle.x + 800;
        }

        if (this.triangle.x <= (0 - 200) ) {
            this.triangle_copy.x = this.triangle.x + 800;
            this.triangle.x = 800 - 200;
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