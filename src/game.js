// const Player = require('./player');
// const Matter = require('./matter');

class Game {
    constructor(context) {
        this.players = [];
        this.matter = [];
        this.context = context;
        this.dpi = window.devicePixelRatio;
        // this.addMatter();
        // this.fix_dpi = this.fix_dpi.bind(this);
        // this.draw = this.draw.bind(this);
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
        //call the dpi fix every time
        //canvas is redrawn
        this.fix_dpi();

        //draw stuff!
        // context.strokeRect(100, 100, 200, 200);

        this.context.beginPath();
        this.context.arc(
            canvas.width / 2,
            canvas.height / 2, 
            40, 0, Math.PI * 2,  
        );
        this.context.closePath();
        this.context.fillStyle = "#9A1CEB"
        this.context.fill();

        requestAnimationFrame(draw);
    }

    // requestAnimationFrame(draw);
}

module.exports = Game;