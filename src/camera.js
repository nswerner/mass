class Camera {
    constructor(board, canvasWidth, canvasHeight, context, dpi) {
        this.board = board;

        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.context = context;
        this.dpi = dpi;

        this.player = this.board.player;
        this.boardX = this.player.boardX - (this.canvasWidth / 2); 
        this.boardY = this.player.boardY - (this.canvasHeight / 2);

        this.matter = [];
        this.allMatter = board.matter;
        
        this.computers = [];
        this.allComputers = board.computers;

        this.updatePos = this.updatePos.bind(this);
        this.draw = this.draw.bind(this);
        this.within = this.within.bind(this);
        this.drawMatter = this.drawMatter.bind(this);
        this.drawComputers = this.drawComputers.bind(this);
        this.drawPlayer = this.drawPlayer.bind(this);
        this.drawBoard = this.drawBoard.bind(this);
    }

    updatePos() {
        this.boardX = this.player.boardX - (this.canvasWidth / 2);
        this.boardY = this.player.boardY - (this.canvasHeight / 2);
    }

    // also check for consumed before inclusion
    within() {
        this.matter = [];
        for (let idx = 0; idx < this.allMatter.length; idx += 1) {
            if (this.allMatter[idx].boardX < this.boardX || this.allMatter[idx].boardX > this.boardX + this.canvasWidth) {
                continue;   
            } else if (this.allMatter[idx].boardY < this.boardY || this.allMatter[idx].boardY > this.boardY + this.canvasHeight) {
                continue;
            } else if (this.allMatter[idx].consumed === false) {
                this.matter.push(this.allMatter[idx]);
            }
        }
        
        this.computers = [];
        for (let idx = 0; idx < this.allComputers.length; idx += 1) {
            if (this.allComputers[idx].boardX + this.allComputers[idx].radius < this.boardX || this.allComputers[idx].boardX - this.allComputers[idx].radius > this.boardX + this.canvasWidth) {
                continue;
            } else if (this.allComputers[idx].boardY + this.allComputers[idx].radius < this.boardY || this.allComputers[idx].boardY - this.allComputers[idx].radius > this.boardY + this.canvasHeight) {
                continue;
            } else if (this.allComputers[idx].consumed === false) {
                this.computers.push(this.allComputers[idx]);
            }
        }
    }

    checkCollisions() {

        // check matter collisions
        for (let idx = 0; idx < this.matter.length; idx += 1) {
            let matter = this.matter[idx];

            if (matter.hasCollidedWith(this.player)) {
                this.player.hasConsumedObject(matter);
            }

            for (let idx2 = 0; idx2 < this.computers.length; idx2 += 1) {
                let computer = this.computers[idx2];
                if (computer.hasCollidedWith(matter)) {
                    computer.hasConsumedObject(matter);
                }
            }
        }

        // check computer collisions
        for (let idx = 0; idx < this.computers.length; idx += 1) {
            let computer = this.computers[idx];

            if (computer.hasCollidedWith(this.player)) {
                if (computer.hasBeenConsumedBy(this.player)) {
                    null;
                } else {
                    computer.hasConsumedObject(this.player);
                }
            }

            for (let idx2 = idx + 1; idx2 < this.computers.length - 1; idx2 += 1) {
                let computer2 = this.computers[idx2];

                if (computer.hasCollidedWith(computer2)) {

                    if (computer.hasBeenConsumedBy(computer2)) {
                        null;
                    } else {
                        computer.hasConsumedObject(computer2);
                    }
                }
            }
        }
    }

    overlap() {
        // draws the canvas elements in ascending order by radius
        // ¬ objects with a larger radius are drawn later, and thus on top of objects with a smaller radius
    }

    drawMatter() {
        
                for (let idx = 0; idx < this.matter.length; idx += 1) {
                    if (this.matter[idx].consumed === false) {
                        this.matter[idx].draw(this.boardX, this.boardY);
                    }
                }

        // let matter;
        // for (let idx = 0; idx < this.matter.length; idx += 1) {
        //     matter = this.matter[idx];

        //     if (matter.isCollidedWith(this.player) === true || matter.consumed === true) {
        //         null;
        //     } else {
        //         matter.draw(this.boardX, this.boardY);
        //     }
        // }
    }

    drawComputers() {

        for (let idx = 0; idx < this.computers.length; idx += 1) {
            
            if (this.computers[idx].consumed === false) {
                this.computers[idx].draw(this.boardX, this.boardY);
            }
        }

        // for (let idx = 0; idx < this.computers.length; idx += 1) {
        //     const computer = this.computers[idx];

        //     if (computer.consumed === true || computer.isCollidedWith(this.player) === true) {
        //         computer.consumed = true;
        //     } else {
        //         computer.draw(this.boardX, this.boardY);
        //     }

        //     for (let idx2 = idx + 1; idx2 < this.computers.length; idx2 += 1) {
        //         const computer2 = this.computers[idx2];

        //         if (computer2.consumed === true || computer.isCollidedWith(computer2) === true) {
        //             computer.consumed = true;
        //         } else {
        //             computer2.draw(this.boardX, this.boardY);  
        //         }
        //     }

        // }

    }

    drawBoard() {
        this.board.draw();
    }


    drawPlayer() {
        
        if (this.player.consumed === true) {
            // CHANGE THIS: create game over modal
            null;
        } else {
            this.player.draw();
        }
    }

    draw() {
        debugger
        //grab all objects within frame
        this.within();

        // NEW
        this.checkCollisions();

        this.within();

        //draw board border
        // this.drawBoard();
        
        //draw in-frame matter
        this.drawMatter();

        //draw in-frame computers
        this.drawComputers();
        
        //draw player
        this.drawPlayer();
        
        // this.board.draw();
        //board draw here actually applies stroke to player???
    }

}

module.exports = Camera;
