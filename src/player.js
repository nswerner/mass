const { COLORS } = require("../assets/palette/palette");
const { game }  = require("./mass");
const Matter = require("./matter");



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

        this.speed = 8;
        this.dXdY = [1, 1];
        this.cursorDistance = 1;
        this.prevMousePos = [1, 1];

        this.consumed = false;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.color2 = COLORS[Math.floor(Math.random() * COLORS.length)];

        this.draw = this.draw.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this); 
        this.move = this.move.bind(this);

        this.cheat = this.cheat.bind(this);
        window.cheat = this.cheat;

        document.addEventListener("mousemove", this.mouseMoveHandler, false);
    }

    // CHANGE THIS - SETTING MAX SIZE
    consumeMatter(object) {
        if (object instanceof Matter) {
            if (this.radius + object.mass < 600) {
                this.radius += object.mass / 1;
                object.mass = 0;
            } else {
                null;
            }
        } else {
            if (this.radius + object.mass < 600) {
                this.radius += object.mass / 2.5;
                object.mass = 0;
            } else {
                null;
            }
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
        
        nextPos[0] = this.boardX + ( (this.dXdY[0] / this.cursorDistance) * this.speed);
        nextPos[1] = this.boardY + ( (this.dXdY[1] / this.cursorDistance) * this.speed);
        
        let relativeX;
        if (nextPos[0] < this.boardX) {
            relativeX = nextPos[0] + (0.005 * this.radius);
            if (relativeX > this.boardX) {
                relativeX = this.boardX - (this.dXdY[0] / this.cursorDistance);
            }
        } else {
            relativeX = nextPos[0] - (0.005 * this.radius);
            if (relativeX < this.boardX) {
                relativeX = this.boardX + (this.dXdY[0] / this.cursorDistance);
            }
        }

        let relativeY;
        if (nextPos[1] < this.boardY) {
            relativeY = nextPos[1] + (0.005 * this.radius);
            if (relativeY > this.boardY) {
                relativeY = this.boardY - (this.dXdY[1] / this.cursorDistance);
            }
        } else {
            relativeY = nextPos[1] - (0.005 * this.radius);
            if (relativeY < this.boardY) {
                relativeY = this.boardY + (this.dXdY[1] / this.cursorDistance);
            }
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


    cheat(n) {
        this.radius = n;
        this.mass = n;
        window.cheat = this.cheat;
    }

    
}

module.exports = Player;