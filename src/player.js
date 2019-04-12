const { COLORS } = require("../assets/palette/palette");
const { Game } = require("./game");


class Player {
    constructor(height, width, context) {
        debugger
        this.height = height;
        this.width = width;
        this.x = width / 2;
        this.y = height / 2;
        this.context = context;
        this.radius = 10;
        this.consumed = false;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.draw = this.draw.bind(this);
        // this.fix_dpi = this.fix_dpi.bind(this);
        debugger
    }

    // fix_dpi() {
    //     debugger
    //     let style = {
    //         height() {
    //             return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
    //         },
    //         width() {
    //             return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
    //         }
    //     }

    //     canvas.setAttribute('width', style.width() * this.dpi);
    //     canvas.setAttribute('height', style.height() * this.dpi);
    // }

    draw() {
        debugger
        // this.fix_dpi();
        this.context.fillStyle = this.color;
        this.context.beginPath();
        this.context.arc(
            this.x, this.y,
            this.radius, 0, Math.PI * 2,
        );
        this.context.closePath();
        this.context.fill();
    }

    
}

module.exports = Player;