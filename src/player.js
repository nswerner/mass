const { COLORS } = require("../assets/palette/palette");
const { Game } = require("./game");


class Player {
    constructor(height, width, context) {
        this.height = height;
        this.width = width;
        this.x = width / 2;
        this.y = height / 2;
        this.radius = 15;

        this.dx = 10;
        this.dy = 5;

        this.context = context;

        this.consumed = false;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];

        this.draw = this.draw.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);

        document.addEventListener("mousemove", this.mouseMoveHandler, false);
    }

    mouseMoveHandler(e) {
        debugger
        this.x = e.clientX * 2;
        this.y = e.clientY * 2;
        debugger
        // this.draw();
        // if (relativeX > 0 && relativeX < this.width) {
        //     this.x = relativeX - this.radius / 2;
        // }

        // let relativeY = e.clientY;
        // if (relativeY > 0 && relativeY < this.height) {
        //     this.y = relativeY - this.radius / 2;
        // }
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.beginPath();
        this.context.arc(
            this.x, this.y,
            this.radius, 0, Math.PI * 2,
        );
        this.context.closePath();
        this.context.fill();


        // want to increment x by dx
        // this.x += 10;
        // this.y += 2 ;


        // UP
        // if (this.y + -this.dy < this.radius) {
        //     // hit top border and keep this.y @ radius/2;
        //     this.y = this.radius/2;
        // } else {
        //     // otherwise, travel up at @mouse vector
        //     this.y += -this.dy;
        // }


        // DOWN
        // if (this.y + this.dy > this.height - (this.radius / 2)) {
        //     // hit bottom border and keep this.y @ this.height + some portion of the radius;
        //     this.y = this.height - (this.radius / 2);
        // } else {
        //     // otherwise, travel y @ the mouse vector
        //     this.y += this.dy;
        // }


        // RIGHT
        // if (this.x + this.dx > (this.width - this.radius / 2)) {
        //     this.x = this.width - (this.radius / 2);
        // } else {
        //     this.x += this.dx;
        // }


        // LEFT
        // if (this.x + -this.dx < this.radius) {
        //     this.x = (this.radius / 2);
        // } else {
        //     this.x += -this.dx;
        // }
    }

    
}

module.exports = Player;