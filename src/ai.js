const { COLORS } = require("../assets/palette/palette");
const { game } = require("./mass");
const Matter = require('./matter');



class AI {
    constructor(board, canvasWidth, canvasHeight, context, dpi, color, size) {
        this.board = board;

        this.boardWidth = board.boardWidth;
        this.boardHeight = board.boardHeight;
       
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;

        this.context = context;
        this.dpi = dpi;
        this.board = board;
        
        this.boardX = Math.floor(Math.random() * (this.board.boardWidth - this.radius));
        this.boardY = Math.floor(Math.random() * (this.board.boardHeight - this.radius));
        
        this.frameOrigin = [this.boardX - (this.canvasWidth / 2), this.boardY - (this.canvasHeight / 2)];

        this.radius = size;
        this.mass = size;
        this.speed = 5;

        this.dXdY = [1, 1];
        // this.prevMousePos = [1, 1];
        // this.cursorDistance = 1;

        this.consumed = false;

        this.color = color;

        this.draw = this.draw.bind(this);
        // this.move = this.move.bind(this);
        this.nearby = this.nearby.bind(this);
        
        // this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        // document.addEventListener("mousemove", this.mouseMoveHandler, false);


    }

    consumeMatter(object) {

        if (object instanceof Matter) {
            this.radius += object.mass / 1;
            object.mass = 0;
        } else { 
            this.radius += object.mass / 2.5;
            object.mass = 0;
        }
    }

    isCollidedWith(object) {
        const objectHitbox = { radius: object.radius, x: object.boardX, y: object.boardY };
        const thisHitbox = { radius: this.radius, x: this.boardX, y: this.boardY };

        const dx = objectHitbox.x - thisHitbox.x;
        const dy = objectHitbox.y - thisHitbox.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < objectHitbox.radius / 2 + thisHitbox.radius) {
            if (object.radius > this.radius) {
                this.consumed = true;
                object.consumeMatter(this);
                return true;
            } else {
                object.consumed = true;
                this.consumeMatter(object);
                return true;
            }
        } else {
            return false;
        }
    }

    // mouseMoveHandler(e) {
    //     let mousePos = [e.clientX * this.dpi, e.clientY * this.dpi];
    //     let canvasMiddle = [this.canvasWidth / 2, this.canvasHeight / 2];

    //     let xDistance;
    //     let yDistance;

    //     this.dXdY = [xDistance, yDistance];

    //     // for (let idx = 0; idx < 2; idx += 1) {
    //     //     this.dXdY[idx] = mousePos[idx] - this.prevMousePos[idx];
    //     // }

    //     for (let idx = 0; idx < 2; idx += 1) {
    //         this.dXdY[idx] = mousePos[idx] - canvasMiddle[idx];
    //     }

    //     this.cursorDistance = Math.sqrt(this.dXdY[0] * this.dXdY[0] + this.dXdY[1] * this.dXdY[1]);
    //     this.prevMousePos[0] = mousePos[0];
    //     this.prevMousePos[1] = mousePos[1];
    // }


    // move() {

    //     let nextPos = [];

    //     nextPos[0] = this.boardX + (this.dXdY[0] / this.cursorDistance) * this.speed;
    //     nextPos[1] = this.boardY + (this.dXdY[1] / this.cursorDistance) * this.speed / 1.25;

    //     let relativeX;
    //     if (nextPos[0] < this.boardX) {
    //         relativeX = nextPos[0] + (0.025 * this.radius);
    //     } else {
    //         relativeX = nextPos[0] - (0.025 * this.radius);
    //     }

    //     let relativeY;
    //     if (nextPos[0] < this.boardY) {
    //         relativeY = nextPos[1] + (0.025 * this.radius);
    //     } else {
    //         relativeY = nextPos[1] - (0.025 * this.radius);
    //     }



    //     if (relativeX < this.radius) {
    //         this.boardX = this.radius;
    //     } else if (relativeX > this.board.boardWidth - this.radius) {
    //         this.boardX = this.board.boardWidth - this.radius;
    //     } else {
    //         this.boardX = relativeX;
    //     }

    //     if (relativeY < this.radius) {
    //         this.boardY = this.radius;
    //     } else if (relativeY > this.board.boardHeight - this.radius) {
    //         this.boardY = this.board.boardHeight - this.radius;
    //     } else {
    //         this.boardY = relativeY;
    //     }
    // }


    nearby() {
        const nearMatter = [];
        const nearComputers = [];
        const nearPlayer = [];

        for (let idx = 0; idx < this.board.matter.length; idx += 1) {
            if (this.board.matter[idx].boardX < this.frameOrigin[0] || this.board.matter[idx].boardX > this.frameOrigin[0] + this.canvasWidth) {
                continue;
            } else if (this.board.matter[idx].boardY < this.frameOrigin[1] || this.board.matter[idx].boardY > this.frameOrigin[1] + this.canvasHeight) {
                continue;
            } else {
                nearMatter.push(this.board.matter[idx]);
            }
        }

        for (let idx = 0; idx < this.board.computers.length; idx += 1) {
            if (this.board.computers[idx].boardX < this.frameOrigin[0] || this.board.computers[idx].boardX > this.frameOrigin[0] + this.canvasWidth) {
                continue;
            } else if (this.board.computers[idx].boardY < this.frameOrigin[1] || this.board.computers[idx].boardY > this.frameOrigin[1] + this.canvasHeight) {
                continue;
            } else {
                nearComputers.push(this.board.computers[idx]);
            }
        }

        if (this.board.player.boardX < this.frameOrigin[0] || this.board.player.boardX > this.frameOrigin[0] + this.canvasWidth) {
            null;
        } else if (this.board.player.boardY < this.frameOrigin[1] || this.board.player.boardY > this.frameOrigin[1] + this.canvasHeight) {
            null;
        } else {
            nearPlayer.push(this.board.player);
        }

        const nearbyObjects = [];
        return nearbyObjects.concat(nearPlayer).concat(nearComputers).concat(nearMatter);
    }



    draw(cameraX, cameraY) {
        this.context.beginPath();
        this.context.arc(
            this.boardX - cameraX, 
            this.boardY - cameraY,
            this.radius, 0, Math.PI * 2,
        );

        this.context.fillStyle = this.color;
        this.context.fill();
        // this.move();
    }


}

module.exports = AI;