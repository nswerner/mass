const Player = require('./player');
// const Matter = require('./matter');

class Game {
    constructor(height, width, context) {
        this.players = [];
        this.matter = [];
        this.height = height;
        this.width = width;
        this.context = context;
        this.dpi = window.devicePixelRatio;

        // this.addMatter();

        this.fix_dpi = this.fix_dpi.bind(this);
        this.player = new Player(height, width, this.context);
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
        this.context.clearRect(0, 0, this.width, this.height);
        
        this.player.draw();
        this.context.save();
        this.context.restore();

        requestAnimationFrame(this.draw);
       
    }





}




module.exports = Game;