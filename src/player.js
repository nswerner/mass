const { COLORS } = require("../assets/palette/palette");
const { game }  = require("./mass");



class Player {
    constructor(canvasWidth, canvasHeight, context, dpi, board) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.context = context;
        this.dpi = dpi;
        this.board = board;

        this.centerX = this.canvasWidth / 2;
        this.centerY = this.canvasHeight / 2;

        this.boardX = Math.floor(Math.random() * this.board.boardWidth);
        this.boardY = Math.floor(Math.random() * this.board.boardHeight);

        this.radius = 15;

        // this.dx = 0.05;
        // this.dy = 0.05;

        // this.speed = [this.dx, this.dy];

        this.speed = 5;
        this.dXdY = [1, 1];
        this.cursorDistance = 1;
        this.prevMousePos = [1, 1];

        this.consumed = false;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.color2 = COLORS[Math.floor(Math.random() * COLORS.length)];

        this.draw = this.draw.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this); 
        this.move = this.move.bind(this);

        document.addEventListener("mousemove", this.mouseMoveHandler, false);
    }

    consumeMatter(object) {
        this.radius += object.mass / 1;
        object.mass = 0;
    }


    mouseMoveHandler(e) {
        let mousePos = [e.clientX * this.dpi, e.clientY * this.dpi];
        let canvasMiddle = [this.canvasWidth / 2, this.canvasHeight / 2];

        let xDistance;
        let yDistance;

       this.dXdY = [xDistance, yDistance];

        // for (let idx = 0; idx < 2; idx += 1) {
        //     this.dXdY[idx] = mousePos[idx] - this.prevMousePos[idx];
        // }

        for (let idx = 0; idx < 2; idx += 1) {
            this.dXdY[idx] = mousePos[idx] - canvasMiddle[idx];
        }

        this.cursorDistance = Math.sqrt(this.dXdY[0] * this.dXdY[0] + this.dXdY[1] * this.dXdY[1]);
        this.prevMousePos[0] = mousePos[0];
        this.prevMousePos[1] = mousePos[1];
    }


    move() {
        let nextPos = [];
        
        nextPos[0] = this.boardX + (this.dXdY[0] / this.cursorDistance) * this.speed;
        nextPos[1] = this.boardY + (this.dXdY[1] / this.cursorDistance) * this.speed / 1.25;
        
        let relativeX;
        if (nextPos[0] < this.boardX) {
            relativeX = nextPos[0] + (0.025 * this.radius);
        } else {
            relativeX = nextPos[0] - (0.025 * this.radius);
        }

        let relativeY;
        if (nextPos[0] < this.boardY) {
            relativeY = nextPos[1] + (0.025 * this.radius);
        } else {
            relativeY = nextPos[1] - (0.025 * this.radius);
        }



        if (relativeX < this.radius) {
            this.boardX = this.radius;
        } else if (relativeX > this.board.boardWidth - this.radius) {
            this.boardX = this.board.boardWidth - this.radius;
        } else {
            this.boardX = relativeX;
        }

        if (relativeY < this.radius) {
            this.boardY = this.radius;
        } else if (relativeY > this.board.boardHeight - this.radius) {
            this.boardY = this.board.boardHeight - this.radius;
        } else {
            this.boardY = relativeY;
        }
    }

    draw() {
        this.context.beginPath();
        this.context.arc(
            this.centerX, this.centerY,
            this.radius, 0, Math.PI * 2,
            );
            
        let gradient = this.context.createLinearGradient(
            this.centerX - this.radius,
            this.centerY - this.radius,
            this.centerX + this.radius,
            this.centerY + this.radius
        );
            
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, this.color2);
        
        this.context.fillStyle = gradient;
        this.context.fill();
        this.move();     
    }

    
}

module.exports = Player;