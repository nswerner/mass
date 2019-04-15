const { COLORS } = require("../assets/palette/palette");
const { Game } = require("./game");


class Matter {
    constructor(boardWidth, boardHeight, canvasWidth, canvasHeight, context, dpi, color, consumed = false) {
        this.context = context;
        this.dpi = dpi;

        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;

        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.boardX = Math.floor(Math.random() * this.boardWidth);
        this.boardY = Math.floor(Math.random() * this.boardHeight);

        this.mass = 1;

        this.consumed = false;
        this.color = color;
        this.draw = this.draw.bind(this);
    }

    isCollidedWith(object) {
        var playerHitbox = { radius: object.radius, x: object.boardX, y: object.boardY };
        var matterHitbox = { radius: 5, x: this.boardX, y: this.boardY };

        var dx = playerHitbox.x - matterHitbox.x;
        var dy = playerHitbox.y - matterHitbox.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < playerHitbox.radius + matterHitbox.radius) {
            this.consumed = true;

            object.consumeMatter(this);
            //
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