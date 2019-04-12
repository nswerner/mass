const { COLORS } = require("../assets/palette/palette");
const { Game } = require("./game");


class Matter {
    constructor(height, width, context, dpi, consumed = false) {
        this.context = context;
        this.dpi = dpi;
        this.height = height;
        this.width = width;

        this.x = Math.floor(Math.random() * this.width);
        this.y = Math.floor(Math.random() * this.height);

        this.consumed = false;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];

        this.draw = this.draw.bind(this);
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.rect(this.x, this.y, 10, 10);
        this.context.fill();
    }


}

module.exports = Matter;