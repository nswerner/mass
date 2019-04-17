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
        
        this.boardX = Math.floor(Math.random() * (this.board.boardWidth));
        this.boardY = Math.floor(Math.random() * (this.board.boardHeight));

        this.nextPos = [];
        
        this.frameOrigin = [this.boardX - (this.canvasWidth / 2), this.boardY - (this.canvasHeight / 2)];

        if (size < 35) {
            this.radius = Math.floor(Math.random() * 10) + 25;
            this.mass = Math.floor(Math.random() * 10) + 25;
        } else {
            this.radius = size;
            this.mass = size;
        }

        this.speed = 5;

        // this.prevMousePos = [1, 1];
        // this.cursorDistance = 1;

        this.consumed = false;

        this.color = color;

        this.draw = this.draw.bind(this);
        // this.move = this.move.bind(this);
        this.nearby = this.nearby.bind(this);
        this.calculateDistance = this.calculateDistance.bind(this);
        
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
                return false;
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

    calculateDistance(object) {
        const dx = object.boardX + object.radius - this.boardX + this.radius;
        const dy = object.boardY + object.radius - this.boardY + this.radius;

        return Math.sqrt(dx * dx + dy * dy);
    }


    nearby() {
        const nearMatter = {};
        const nearComputers = {};
        const nearPlayer = {};

        for (let idx = 0; idx < this.board.matter.length; idx += 1) {
            let matter = this.board.matter[idx];
            if (matter.boardX < this.frameOrigin[0] || matter.boardX > this.frameOrigin[0] + this.canvasWidth) {
                continue;
            } else if (matter.boardY < this.frameOrigin[1] || matter.boardY > this.frameOrigin[1] + this.canvasHeight) {
                continue;
            } else {
                nearMatter[this.calculateDistance(matter)] = matter;
            }
        }

        for (let idx = 0; idx < this.board.computers.length; idx += 1) {
            let computer = this.board.computers[idx];
            if (computer.boardX < this.frameOrigin[0] || computer.boardX > this.frameOrigin[0] + this.canvasWidth) {
                continue;
            } else if (computer.boardY < this.frameOrigin[1] || computer.boardY > this.frameOrigin[1] + this.canvasHeight) {
                continue;
            } else {
                nearComputers[this.calculateDistance(computer)] = computer;
            }
        }

        let player = this.board.player;
        if (player.boardX < this.frameOrigin[0] || player.boardX > this.frameOrigin[0] + this.canvasWidth) {
            null;
        } else if (player.boardY < this.frameOrigin[1] || player.boardY > this.frameOrigin[1] + this.canvasHeight) {
            null;
        } else {
            nearPlayer[this.calculateDistance(player)] = player;
        }

        let nearbyObjects = {};
        return nearbyObjects = Object.assign(nearbyObjects, {nearPlayer}, {nearComputers}, {nearMatter});
    }

    // passed an individual object one at a time from a sorted set of data so that closest objects are assessed first
    threatened(object) {
        if (object.mass > this.mass && this.calculateDistance(object) <= 250) {
            return true;
        } else {
            return false;
        }
    }

    sortNearbyThreats(nearbyObjects) {
        const nearbyThreats = Object.assign({}, nearbyObjects.nearPlayer, nearbyObjects.nearComputers);
        const allDistances = Object.keys(nearbyThreats);
        const sortedDistances = allDistances.sort(function (a, b) { return a - b });
        const sortedThreatsByDistance = [];
        for (let idx = 0; idx < sortedDistances.length; idx += 1) {
            sortedThreatsByDistance.push(nearbyThreats[sortedDistances[idx]]);
        }

        return sortedThreatsByDistance;
    }



    decideMove() {
        let nearby = this.nearby();
        let threats;
        let targets;

        let nearestThreats = this.sortNearbyThreats(nearby);
        
        for (let idx = 0; idx < nearestThreats.length; idx += 1) {
            const threat = nearestThreats[idx];
            if (threat.mass > this.mass && this.calculateDistance(threat) < 600) {
                debugger
                this.dx = threat.boardX + threat.radius - this.boardX + this.radius;
                this.dy = threat.boardY + threat.radius - this.boardY + this.radius;
                this.threatDistance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);


                this.nextPos[0] = this.boardX - ((this.dx / this.threatDistance) * this.speed);
                this.nextPos[1] = this.boardY - ((this.dy / this.threatDistance) * this.speed);
                this.threatened = true;
                break;
            }

        }

        if (this.threatened === true) {
            debugger
            this.move(this.nextPos, this.dx, this.dy, this.threatDistance);
        }
       
    }

    move(nextPos, dx, dy, distance) {
        debugger
        let relativeX;
        if (nextPos[0] < this.boardX) {
            relativeX = nextPos[0] + (0.005 * this.radius);
            if (relativeX > this.boardX) {
                relativeX = this.boardX - (dx / distance);
            }
        } else {
            relativeX = nextPos[0] - (0.005 * this.radius);
            if (relativeX < this.boardX) {
                relativeX = this.boardX + (dx / distance);
            }
        }

        let relativeY;
        if (nextPos[1] < this.boardY) {
            relativeY = nextPos[1] + (0.005 * this.radius);
            if (relativeY > this.boardY) {
                relativeY = this.boardY - (dy / distance);
            }
        } else {
            relativeY = nextPos[1] - (0.005 * this.radius);
            if (relativeY < this.boardY) {
                relativeY = this.boardY + (dy / distance);
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






    draw(cameraX, cameraY) {
        this.context.beginPath();
        this.context.arc(
            this.boardX - cameraX, 
            this.boardY - cameraY,
            this.radius, 0, Math.PI * 2,
        );

        this.context.fillStyle = this.color;
        this.context.fill();
        this.decideMove();
    }


}

module.exports = AI;