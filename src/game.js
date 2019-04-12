const Player = require('./player');
const Matter = require('./matter');

class Game {
    constructor(height, width, context, dpi) {
        this.players = [];
        this.matter = [];
        this.height = height;
        this.width = width;
        this.context = context;
        this.dpi = dpi;

        this.createMatter(20);

        this.player = new Player(height, width, this.context, this.dpi);
        this.fix_dpi = this.fix_dpi.bind(this);
        this.draw = this.draw.bind(this);
        this.createMatter = this.createMatter.bind(this);
    }

    createMatter(x) {
        for (let idx = 0; idx < x; idx += 1) {
            let localMatter = new Matter(this.height, this.width, this.context, this.dpi);
            this.matter.push(localMatter);
            localMatter.draw();
        } 
    }

    updateMatter() {

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
        
        let matter;
        for (let idx = 0; idx < this.matter.length; idx += 1) {
            matter = this.matter[idx];
            matter.draw();
        }

        this.player.draw();

        requestAnimationFrame(this.draw);
    }





}




module.exports = Game;