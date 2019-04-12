const Player = require('./player');
// const Matter = require('./matter');

class Game {
    constructor(height, width, context) {
        debugger
        this.players = [];
        this.matter = [];
        this.height = height;
        this.width = width;
        this.context = context;
        this.dpi = window.devicePixelRatio;

        // this.addMatter();
        // this.draw = this.draw.bind(this);
        this.fix_dpi = this.fix_dpi.bind(this);
        this.player = new Player(height, width, this.context);
        this.draw = this.draw.bind(this);
    }

    fix_dpi() {
        debugger
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

    // eventually will clear the canvas and draw everything
    draw() {
        debugger
        this.fix_dpi();
        this.context.clearRect(0, 0, this.width, this.height);
        
        this.player.draw();

        debugger
        //call the dpi fix every time
        //canvas is redrawn

        ///

        // this.context.beginPath();
        // this.context.arc(
        //     canvas.width / 2,
        //     canvas.height / 2, 
        //     40, 0, Math.PI * 2,  
        // );
        // this.context.closePath();
        // this.context.fillStyle = "#9A1CEB"
        // this.context.fill();

        ///

        requestAnimationFrame(this.draw);
    }

    // requestAnimationFrame(draw);




}




module.exports = Game;