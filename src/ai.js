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

        this.nextPos = [this.boardX - 1, this.boardY - 1];
        this.dx = 1;
        this.dy = 1;
        this.targetDistance = 1000;
        this.threatDistance = 500;
        
        this.frameOrigin = [this.boardX - (this.canvasWidth / 2), this.boardY - (this.canvasHeight / 2)];

        if (size < 35) {
            this.radius = Math.floor(Math.random() * 10) + 25;
            this.mass = this.radius;
        } else {
            this.radius = size;
            this.mass = size;
        }

        this.speed = 5;

        this.consumed = false;

        this.color = color;

        this.draw = this.draw.bind(this);
        this.decideMove = this.decideMove.bind(this);
        this.move = this.move.bind(this);

        this.nearby = this.nearby.bind(this);
        this.sortNearbyPlayers = this.sortNearbyPlayers.bind(this);
        this.sortNearbyMatter = this.sortNearbyMatter.bind(this);
        this.calculateDistance = this.calculateDistance.bind(this);

        this.hasCollidedWith = this.hasCollidedWith.bind(this);
        this.hasBeenConsumedBy = this.hasBeenConsumedBy.bind(this);
        this.hasConsumedObject = this.hasConsumedObject.bind(this);
        this.consumeMatter = this.consumeMatter.bind(this);
    }

    consumeMatter(object) {

        if (object instanceof Matter) {
            if (this.radius + object.mass < 600) {
                this.mass += object.mass;
                this.radius += object.mass;
                object.mass = 0;
                object.consumed = true;
            } 
        } else {
            if (this.radius + object.mass < 600) {
                this.mass += object.mass / 3;
                this.radius += object.mass / 3;
                object.mass = 0;
                object.consumed = true;
            }
        }
    }

    hasCollidedWith(object) {
        const thisHitbox = { radius: this.radius, x: this.boardX, y: this.boardY };
        const objectHitbox = { radius: object.radius, x: object.boardX, y: object.boardY };

        const dx = objectHitbox.x - thisHitbox.x;
        const dy = objectHitbox.y - thisHitbox.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < objectHitbox.radius / 2 + thisHitbox.radius / 2) {
            return true;
        } else {
            return false;
        }
    }

    hasBeenConsumedBy(object) {
        if (object.radius > this.radius) {
            object.consumeMatter(this);
            return true;
        } else {
            return false;
        }
    }

    hasConsumedObject(object) {
        if (this.radius > object.radius) {
            this.consumeMatter(object);
            return true;
        } else {
            return false;
        }
    }

    // isCollidedWith(object) {
    //     const objectHitbox = { radius: object.radius, x: object.boardX, y: object.boardY };
    //     const thisHitbox = { radius: this.radius, x: this.boardX, y: this.boardY };

    //     const dx = objectHitbox.x - thisHitbox.x;
    //     const dy = objectHitbox.y - thisHitbox.y;
    //     const distance = Math.sqrt(dx * dx + dy * dy);

    //     if (distance < (objectHitbox.radius / 2) + thisHitbox.radius) {
    //         if (object.radius > this.radius) {
    //             object.consumeMatter(this);
    //             return true;
    //         } else {
    //             this.consumeMatter(object);
    //             return false;
    //         }
    //     } else {
    //         return false;
    //     }
    // }

    calculateDistance(object) {
        const thisHitbox = { radius: this.radius, x: this.boardX, y: this.boardY };
        const objectHitbox = { radius: object.radius, x: object.boardX, y: object.boardY };

        const dx = objectHitbox.x - thisHitbox.x;
        const dy = objectHitbox.y - thisHitbox.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        return distance - objectHitbox.radius - thisHitbox.radius;
    }

    nearby() {
        const nearMatter = {};
        const nearComputers = {};
        const nearPlayer = {};

        for (let idx = 0; idx < this.board.matter.length; idx += 1) {
            const matter = this.board.matter[idx];
            if (matter.boardX < this.frameOrigin[0] || matter.boardX > this.frameOrigin[0] + this.canvasWidth) {
                continue;
            } else if (matter.boardY < this.frameOrigin[1] || matter.boardY > this.frameOrigin[1] + this.canvasHeight) {
                continue;
            } else {
                nearMatter[this.calculateDistance(matter)] = matter;
            }
        }

        for (let idx = 0; idx < this.board.computers.length; idx += 1) {
            const computer = this.board.computers[idx];
            if (computer.boardX + computer.radius < this.frameOrigin[0] || computer.boardX + computer.radius > this.frameOrigin[0] + this.canvasWidth) {
                continue;
            } else if (computer.boardY + computer.radius < this.frameOrigin[1] || computer.boardY + computer.radius > this.frameOrigin[1] + this.canvasHeight) {
                continue;
            } else {
                nearComputers[this.calculateDistance(computer)] = computer;
            }
        }
        delete nearComputers[`-${this.radius * 2}`];

        let player = this.board.player;
        if (player.boardX + player.radius < this.frameOrigin[0] || player.boardX + player.radius > this.frameOrigin[0] + this.canvasWidth) {
            null;
        } else if (player.boardY + player.radius < this.frameOrigin[1] || player.boardY + player.radius > this.frameOrigin[1] + this.canvasHeight) {
            null;
        } else {
            nearPlayer[this.calculateDistance(player)] = player;
        }

        let nearbyObjects = {};
        return nearbyObjects = Object.assign(nearbyObjects, {nearPlayer}, {nearComputers}, {nearMatter});
    }



    // // passed an individual object one at a time from a sorted set of data so that closest objects are assessed first
    // stillThreatened(object) {
    //     if (object.mass > this.mass && this.calculateDistance(object) < 600) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }


    sortNearbyPlayers(nearbyObjects) {
        const nearbyThreats = Object.assign({}, nearbyObjects.nearPlayer, nearbyObjects.nearComputers);
        const allDistances = Object.keys(nearbyThreats);
        const sortedDistances = allDistances.sort(function (a, b) { return a - b });
        const sortedThreatsByDistance = [];
        for (let idx = 0; idx < sortedDistances.length; idx += 1) {
            sortedThreatsByDistance.push(nearbyThreats[sortedDistances[idx]]);
        }

        return sortedThreatsByDistance;
    }


    sortNearbyMatter(nearbyObjects) {
        const nearbyMatter = Object.keys(nearbyObjects.nearMatter);
        const sortedDistances = nearbyMatter.sort(function (a, b) { return a - b });
        const sortedMatterByDistance = [];
        for (let idx = 0; idx < sortedDistances.length; idx += 1) {
            sortedMatterByDistance.push(nearbyObjects.nearMatter[sortedDistances[idx]]);
        }

        return sortedMatterByDistance;
    }


    decideMove() {

        const nearby = this.nearby();
        const self = this;
        const nearestPlayers = this.sortNearbyPlayers(nearby);
        
        //threat loop
        for (let idx = 0; idx < nearestPlayers.length; idx += 1) {
            const threat = nearestPlayers[idx];
            debugger

            if ((threat.mass > self.mass) && self.calculateDistance(threat) < 200) {
                debugger

                self.threatened = true;
                self.threat = threat;

                self.dx = threat.boardX + threat.radius - self.boardX + self.radius;
                self.dy = threat.boardY + threat.radius - self.boardY + self.radius;
                self.threatDistance = Math.sqrt(self.dx * self.dx + self.dy * self.dy);

                // do I need to account for radius here?
                self.nextPos[0] = self.boardX - ((self.dx / self.threatDistance) * self.speed);
                self.nextPos[1] = self.boardY - ((self.dy / self.threatDistance) * self.speed);
                return;
            }
        } 
        
        //target loop
        for (let idx = 0; idx < nearestPlayers.length; idx += 1) {
            debugger

           self.threatened = false;
           self.threat = null;

            const target = nearestPlayers[idx];
            if (target.mass < self.mass && self.calculateDistance(target) < 1000) {
                debugger
    
                self.target = target;

                self.dx = target.boardX - self.boardX;
                self.dy = target.boardY - self.boardY;
                self.targetDistance = Math.sqrt(self.dx * self.dx + self.dy * self.dy);

                // do I need to account for radius here?
                self.nextPos[0] = self.boardX + ((self.dx / self.targetDistance) * self.speed);
                self.nextPos[1] = self.boardY + ((self.dy / self.targetDistance) * self.speed);
                return;
            }   
        }

        // matter loop
        const nearestMatter = this.sortNearbyMatter(nearby);
        for (let idx = 0; idx < nearestMatter.length; idx += 1) {
            debugger

            const target = nearestMatter[idx];
            if (self.calculateDistance(target) < self.canvasHeight * self.canvasWidth) {
                debugger

                self.target = target;

                self.dx = target.boardX + target.radius - self.boardX + self.radius;
                self.dy = target.boardY + target.radius - self.boardY + self.radius;
                self.targetDistance = Math.sqrt(self.dx * self.dx + self.dy * self.dy);

                // do I need to account for radius here?
                self.nextPos[0] = self.boardX + ((self.dx / self.targetDistance) * self.speed);
                self.nextPos[1] = self.boardY + ((self.dy / self.targetDistance) * self.speed);
                return;
            }
        }

    }

    // ! HERE !

    move(nextPos, dx, dy, distance) {
        let relativeX;
        // if moving left
        if (nextPos[0] < this.boardX) {
            // x differential would be (nPos - this.pos) = (-), so add to relativeXpos by the portion of the radius
            relativeX = nextPos[0] + (0.005 * this.radius);
            
            // if adding that portion ends up making relativeX greater than the current pos, set relative X to the smallest possible movement in the desired direction
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



        if (relativeX <= this.radius) {
            this.boardX = this.radius;
        } else if (relativeX >= this.board.boardWidth - this.radius) {
            this.boardX = this.board.boardWidth - this.radius;
        } else {
            this.boardX = relativeX;
        }

        if (relativeY <= this.radius) {
            this.boardY = this.radius;
        } else if (relativeY >= this.board.boardHeight - this.radius) {
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

        setInterval(this.decideMove(), 5000);

        if (this.threatened === true) {
            this.move(this.nextPos, this.dx, this.dy, this.threatDistance);
        } else {
            this.move(this.nextPos, this.dx, this.dy, this.targetDistance);
        }
    }


}

module.exports = AI;