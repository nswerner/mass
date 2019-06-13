const Board = require('./board');
const Camera = require('./camera');


class Game {
    constructor(canvasWidth, canvasHeight, context, dpi, modal, speed = 7.5) {
        this.gameOver = false;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.context = context;
        this.dpi = dpi;
        this.speed = speed;

        this.board = new Board(20000, 15000, this.canvasWidth, this.canvasHeight, this.context, this.dpi, this.speed, this);
        this.camera = new Camera(this.board, this.canvasWidth, this.canvasHeight, this.context, this.dpi, modal);

        this.draw = this.draw.bind(this);
        this.start = this.start.bind(this);  

    }

    start() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.camera.start();
        this.draw();
    }

    draw() {
        if (this.gameOver) {
            cancelAnimationFrame(this.draw);
        } else {
            this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.camera.updatePos();
            this.camera.draw();
            requestAnimationFrame(this.draw);
        }
    }

}


module.exports = Game;