const { COLORS } = require('../assets/palette/palette');
const Matter = require('./matter');
const Player = require('./player');
const AI = require('./ai');


class Board {
    constructor(boardWidth, boardHeight, canvasWidth, canvasHeight, context, dpi, speed, game) {
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.game = game;

        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.context = context;
        this.dpi = dpi;
        this.speed = speed;

        this.matter = [];
        this.createMatter(3000);
        this.repopulateMatter(250, 5);

        this.player = new Player(canvasWidth, canvasHeight, this.context, this.dpi, this, speed, game);
        
        this.computers = [];

        if (speed > 7) {
            this.createAI(100, this.game);
        }
        
        this.createMatter = this.createMatter.bind(this);
        this.repopulateMatter = this.repopulateMatter.bind(this);
        
        this.createAI = this.createAI.bind(this);
        
        this.draw = this.draw.bind(this);

    }

    repopulateMatter(n, seconds) {
        setInterval(() => {
            if (this.matter.length < 100) {
                this.createMatter(n + 300)
            } else if (this.matter.length < 200) {
                this.createMatter(n + 200);
            } else if (this.matter.length < 500) {
                this.createMatter(n);
            } else {
                this.createMatter(n / 3);
            }
        }, seconds * 1000);
    }

    createMatter(n) {
        for (let idx = 0; idx < n; idx += 1) {
            let localMatter = new Matter(this, this.canvasWidth, this.canvasHeight, this.context, this.dpi, COLORS[Math.floor(Math.random() * COLORS.length)]);
            this.matter.push(localMatter);
        }
    }

    createAI(n, game) {
        for (let idx = 0; idx < n - n/5; idx += 1) {
            let localAI = new AI(this, this.canvasWidth, this.canvasHeight, this.context, this.dpi, COLORS[Math.floor(Math.random() * COLORS.length)], Math.floor((Math.random() + 0.05) * 100), game);
            this.computers.push(localAI);
        }

        for (let idx = 0; idx < n / 5; idx += 1) {
            let localAI = new AI(this, this.canvasWidth, this.canvasHeight, this.context, this.dpi, COLORS[Math.floor(Math.random() * COLORS.length)], Math.floor((Math.random() + 0.05) * 300), game);
            this.computers.push(localAI);
        }
    }

    // repopulateAI(n, seconds) {
    //     setInterval(() => this.createAI(n), seconds * 1000);
    // }

    won() {
        if (this.player.won) {
            this.game = won;
        }
    }

    draw() {
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 3;
        this.context.rect(0, 0, this.boardWidth, this.boardHeight);
        this.context.stroke();
        this.context.save();
    }
}

module.exports = Board;