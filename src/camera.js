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
    }

    updatePos() {
        this.boardX = this.player.boardX - (this.canvasWidth / 2);
        this.boardY = this.player.boardY - (this.canvasHeight / 2);
    }

    within() {
        this.matter = [];
        for (let idx = 0; idx < this.allMatter.length; idx += 1) {
            if (this.allMatter[idx].boardX < this.boardX || this.allMatter[idx].boardX > this.boardX + this.canvasWidth) {
                continue;   
            } else if (this.allMatter[idx].boardY < this.boardY || this.allMatter[idx].boardY > this.boardY + this.canvasHeight) {
                continue;
            } else {
                this.matter.push(this.allMatter[idx]);
            }
        }
        
        this.computers = [];
        for (let idx = 0; idx < this.allComputers.length; idx += 1) {
            if (this.allComputers[idx].boardX + this.allComputers[idx].radius < this.boardX || this.allComputers[idx].boardX - this.allComputers[idx].radius > this.boardX + this.canvasWidth) {
                continue;
            } else if (this.allComputers[idx].boardY + this.allComputers[idx].radius < this.boardY || this.allComputers[idx].boardY - this.allComputers[idx].radius > this.boardY + this.canvasHeight) {
                continue;
            } else {
                this.computers.push(this.allComputers[idx]);
            }
        }
    }

    overlap() {
        // draws the canvas elements in ascending order by radius
        // ¬ objects with a larger radius are drawn later, and thus on top of objects with a smaller radius
    }

    drawMatter() {

        let matter;
        for (let idx = 0; idx < this.matter.length; idx += 1) {
            matter = this.matter[idx];

            if (matter.isCollidedWith(this.player) === true || matter.consumed === true) {
                this.matter.splice(idx, 1);
                idx -= 1;
            } else {
                matter.draw(this.boardX, this.boardY);
            }
        }
    }

    drawComputers() {

        let computer;
        for (let idx = 0; idx < this.computers.length; idx += 1) {
            computer = this.computers[idx];

            // computer.isCollidedWith(this.player) === true ||
            if (computer.isCollidedWith(this.player) === true || computer.consumed === true) {
                null;
            } else {
                computer.draw(this.boardX, this.boardY);
            }
        }

    }

    drawPlayer() {
        
        
        if (this.player.consumed) {
            // CHANGE THIS: create game over modal
            null;
        } else {
            this.player.draw();
        }
    }

    draw() {
        //grab all objects within frame
        this.within();

        //draw board border
        

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
