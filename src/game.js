const Player = require('./player');
const Matter = require('./matter');
const { COLORS } = require('../assets/palette/palette');

class Game {
    constructor(height, width, context, dpi) {
        this.players = [];
        this.matter = [];
        this.height = height;
        this.width = width;
        this.context = context;
        this.dpi = dpi;

        this.createMatter(50);
        this.repopulateMatter(3, 5)

        this.player = new Player(height, width, this.context, this.dpi);
        this.fix_dpi = this.fix_dpi.bind(this);
        this.draw = this.draw.bind(this);
        this.createMatter = this.createMatter.bind(this);
        this.repopulateMatter = this.repopulateMatter.bind(this);
       
    }

    repopulateMatter(n, seconds) {
        setInterval( () => {
            if (this.matter.length < 20) {
                this.createMatter(n + 5);
            } else if (this.matter.length < 40) {
                this.createMatter(n);
            }
        }, seconds * 1000);
    }

    createMatter(n) {
        for (let idx = 0; idx < n; idx += 1) {
            let localMatter = new Matter(this.height, this.width, this.context, this.dpi, COLORS[Math.floor(Math.random() * COLORS.length)]);
            this.matter.push(localMatter);
        } 
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

            if (matter.isCollidedWith(this.player) === true) {
                this.matter.splice(idx, 1);
            } else {
                matter.draw();
            }
        }

        this.player.draw();

        requestAnimationFrame(this.draw);
    }





}




module.exports = Game;