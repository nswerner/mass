const { COLORS } = require('../assets/palette/palette');
const Matter = require('./matter');
const Player = require('./player');


class Board {
    constructor(boardWidth, boardHeight, canvasWidth, canvasHeight, context, dpi) {
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;

        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.context = context;
        this.dpi = dpi;

        this.matter = [];
        this.createMatter(500);
        this.repopulateMatter(3, 5);

        // MAY NEED TO ADD GAME
        this.player = new Player(canvasWidth, canvasHeight, this.context, this.dpi, this);
        this.computers = [];

        this.createMatter = this.createMatter.bind(this);
        this.repopulateMatter = this.repopulateMatter.bind(this);
        this.draw = this.draw.bind(this);
    }

    repopulateMatter(n, seconds) {
        setInterval(() => {
            if (this.matter.length < 8) {
                this.createMatter(n + 10)
            } else if (this.matter.length < 20) {
                this.createMatter(n + 5);
            } else if (this.matter.length < 40) {
                this.createMatter(n);
            }
        }, seconds * 1000);
    }

    createMatter(n) {
        for (let idx = 0; idx < n; idx += 1) {
            let localMatter = new Matter(this.boardWidth, this.boardHeight, this.canvasWidth, this.canvasHeight, this.context, this.dpi, COLORS[Math.floor(Math.random() * COLORS.length)]);
            this.matter.push(localMatter);
        }
    }

    draw() {
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 3;
        this.context.rect(0, 0, this.boardWidth, this.boardHeight);
        this.context.stroke();

    }
}

module.exports = Board;