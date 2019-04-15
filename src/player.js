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

        this.dx = 0.05;
        this.dy = 0.05;

        this.speed = [this.dx, this.dy];

        this.consumed = false;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.color2 = COLORS[Math.floor(Math.random() * COLORS.length)];

        this.draw = this.draw.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
       
        // this.move = this.move.bind(this);

        document.addEventListener("mousemove", this.mouseMoveHandler, false);
    }

    consumeMatter(object) {
        this.radius += object.mass / 1.35;
        object.mass = 0;
    }


    mouseMoveHandler(e) {

        let currentPos = [this.boardX, this.boardY];

        let mousePos = [e.clientX * this.dpi, e.clientY * this.dpi];
        let canvasMiddle = [this.canvasWidth / 2, this.canvasHeight / 2];

        let xDistance;
        let yDistance;

        let distanceArray = [xDistance, yDistance];

        for (let idx = 0; idx < 2; idx += 1) {
            distanceArray[idx] = mousePos[idx] - canvasMiddle[idx];
        }

        let relativeDx = this.dx - (0.0025 * this.radius);
        let relativeDy = relativeDx;

        if (relativeDx < 0.01) {
            relativeDx = 0.01;
            relativeDy = 0.01;
        };


        if (this.boardX + distanceArray[0] * relativeDx < this.radius) {
            this.boardX = this.radius;
        } else if (this.boardX + (distanceArray[0] * relativeDx) > this.board.boardWidth - this.radius) {
            this.boardX = this.board.boardWidth - this.radius;
        } else {
            this.boardX += distanceArray[0] * relativeDx;
        }

        if (this.boardY + distanceArray[1] * relativeDy < this.radius) {
            this.boardY = this.radius;
        } else if (this.boardY + distanceArray[1] * relativeDy > this.board.boardHeight - this.radius) {
            this.boardY = this.board.boardHeight - this.radius;
        } else {
            this.boardY += distanceArray[1] * relativeDy;
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
    
        // UP
        // if (this.centerY + -this.dy < this.radius) {
        //     // hit top border and keep this.centerY @ radius/2;
        //     this.centerY = this.radius/2;
        // } else {
        //     // otherwise, travel up at @mouse vector
        //     this.centerY += -this.dy;
        // }


        // DOWN
        // if (this.centerY + this.dy > this.canvasHeight - (this.radius / 2)) {
        //     // hit bottom border and keep this.centerY @ this.canvasHeight + some portion of the radius;
        //     this.centerY = this.canvasHeight - (this.radius / 2);
        // } else {
        //     // otherwise, travel y @ the mouse vector
        //     this.centerY += this.dy;
        // }


        // RIGHT
        // if (this.centerX + this.dx > (this.canvasWidth - this.radius / 2)) {
        //     this.x = this.canvasWidth - (this.radius / 2);
        // } else {
        //     this.x += this.dx;
        // }


        // LEFT
        // if (this.x + -this.dx < this.radius) {
        //     this.x = (this.radius / 2);
        // } else {
        //     this.x += -this.dx;
        // }
    }

    
}

module.exports = Player;