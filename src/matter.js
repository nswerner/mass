const { COLORS } = require("../assets/palette/palette");
const { Game } = require("./game");


class Matter {
    constructor(board, canvasWidth, canvasHeight, context, dpi, color, consumed = false) {
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
        this.radius = 5;

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

        if (distance < playerHitbox.radius / 2 + matterHitbox.radius) {
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