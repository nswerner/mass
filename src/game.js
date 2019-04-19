const Board = require('./board');
const Camera = require('./camera');


class Game {
    constructor(canvasWidth, canvasHeight, context, dpi, modal, speed = 7.5) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.context = context;
        this.dpi = dpi;
        this.speed = speed;

        this.board = new Board(20000, 15000, this.canvasWidth, this.canvasHeight, this.context, this.dpi, this.speed, this);
        this.camera = new Camera(this.board, this.canvasWidth, this.canvasHeight, this.context, this.dpi, modal);

        this.fix_dpi = this.fix_dpi.bind(this);
        this.draw = this.draw.bind(this);
        this.start = this.start.bind(this);  
    }

    fix_dpi() {
        let style = {
            height() {
                return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
            },
            width() {
                return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
            }
        }

        canvas.setAttribute('width', style.width() * this.dpi);
        canvas.setAttribute('height', style.height() * this.dpi);
    }

    start() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.camera.start();
        this.draw();
    }

    draw() {
        this.fix_dpi();
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.camera.updatePos();
        this.camera.draw();
        
        requestAnimationFrame(this.draw);
    }

}


module.exports = Game;