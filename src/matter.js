

class Matter {
    constructor(board, canvasWidth, canvasHeight, context, dpi, color) {
        this.board = board;
        this.context = context;
        this.dpi = dpi;

        this.boardWidth = board.boardWidth;
        this.boardHeight = board.boardHeight;

        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.boardX = Math.floor(Math.random() * this.boardWidth);
        this.boardY = Math.floor(Math.random() * this.boardHeight);

        this.mass = 1;
        this.radius = 7;

        this.consumed = false;
        this.color = color;
        this.draw = this.draw.bind(this);
        this.hasCollidedWith = this.hasCollidedWith.bind(this);
    }

    hasCollidedWith(object) {
        const playerHitbox = { radius: object.radius, x: object.boardX, y: object.boardY };
        const matterHitbox = { radius: 5, x: this.boardX, y: this.boardY };

        const dx = playerHitbox.x - matterHitbox.x;
        const dy = playerHitbox.y - matterHitbox.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < playerHitbox.radius + matterHitbox.radius + 5) {
            return true;
        } else {
            return false;
        }
    }

    draw(cameraX, cameraY) {
        this.context.fillStyle = this.color;
        this.context.fillRect(
            this.boardX - cameraX,
            this.boardY - cameraY,
            12, 12
        );
    }


}

module.exports = Matter;