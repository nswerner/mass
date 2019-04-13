const { COLORS } = require("../assets/palette/palette");
const { Game } = require("./game");


class Matter {
    constructor(height, width, context, dpi, color, consumed = false) {
        this.context = context;
        this.dpi = dpi;
        this.height = height;
        this.width = width;

        this.x = Math.floor(Math.random() * this.width);
        this.y = Math.floor(Math.random() * this.height);

        this.mass = 1;

        this.consumed = false;
        this.color = color;
        this.draw = this.draw.bind(this);
        this.draw();
    }

    isCollidedWith(object) {
        var playerHitbox = { radius: object.radius, x: object.x, y: object.y };
        var matterHitbox = { radius: 5, x: this.x, y: this.y };

        var dx = playerHitbox.x - matterHitbox.x;
        var dy = playerHitbox.y - matterHitbox.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < playerHitbox.radius + matterHitbox.radius) {
            this.consumed = true;
            return true;
        } else {
            return false;
        }
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, 10, 10);
        this.context.save();
    }

    


}

module.exports = Matter;