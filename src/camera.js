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

        this.updatePos = this.updatePos.bind(this);
        this.draw = this.draw.bind(this);
        this.within = this.within.bind(this);
        this.drawMatter = this.drawMatter.bind(this);

        this.within();
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

        // include logic to do computers within once they're created
    }

    drawMatter() {
        // this.within();

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

    draw() {
        this.within();

        //draw matter
        this.drawMatter();
          
        //draw player
        this.player.draw();  
    }

}

module.exports = Camera;
