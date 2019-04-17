// const Player = require('./player');
// const Matter = require('./matter');
const Board = require('./board');
const Camera = require('./camera');
const { COLORS } = require('../assets/palette/palette');


class Game {
    constructor(canvasWidth, canvasHeight, context, dpi) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.context = context;
        this.dpi = dpi;

        this.board = new Board(10000, 5000, this.canvasWidth, this.canvasHeight, this.context, this.dpi);
        this.camera = new Camera(this.board, this.canvasWidth, this.canvasHeight, this.context, this.dpi);

        this.fix_dpi = this.fix_dpi.bind(this);
        this.draw = this.draw.bind(this);
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

    draw() {
        this.fix_dpi();
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.camera.updatePos();
        // this.board.draw();
        this.camera.draw();
        
        requestAnimationFrame(this.draw);
    }

}




module.exports = Game;