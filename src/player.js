const { COLORS } = require("../assets/palette/palette");
const { Game } = require("./game");


class Player {
    constructor(height, width, context, dpi) {
        this.dpi = dpi;
        this.height = height;
        this.width = width;
        this.x = width / 2;
        this.y = height / 2;
        this.radius = 15;

        this.dx = 0.2;
        this.dy = 0.2;
        this.speed = [this.dx, this.dy];

        this.context = context;

        this.consumed = false;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];

        this.draw = this.draw.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        // this.move = this.move.bind(this);

        document.addEventListener("mousemove", this.mouseMoveHandler, false);
    }

    mouseMoveHandler(e) {

        let currentPos = [this.x, this.y];
        let mousePos = [e.clientX * this.dpi, e.clientY * this.dpi];
        const middle = [this.width / 2, this.height / 2];

        let xDistance;
        let yDistance;
        
        let distanceArray = [xDistance, yDistance];

        for (let idx = 0; idx < 2; idx += 1) {
            if (mousePos[idx] < middle[idx]) {
                distanceArray[idx] = mousePos[idx] - currentPos[idx];
            } else if (mousePos[idx] > middle[idx]) {
                distanceArray[idx] = mousePos[idx] - currentPos[idx];
            } else {
                distanceArray[idx] = 0;
            }
        }

        // let xDistance = mousePos[0] - this.x;
        // let yDistance = mousePos[1] - this.y;

        let distance = Math.sqrt(distanceArray[0] * distanceArray[0] + distanceArray[1] * distanceArray[1]);

        if (distance > 1) {
            this.x += distanceArray[0] * this.dx;
            this.y += distanceArray[1] * this.dy;
        }
    
    }

    // mouseMoveHandler(e) {
    //     const speed = [this.dx, this.dy];
    //     let currentPos = [this.x, this.y];
    //     let mousePos = [e.clientX * this.dpi, e.clientY * this.dpi];

    //   

    //     let nextPos = [];

    //     for (let idx = 0; idx < 2; idx += 1) {
    //         if (currentPos[idx] < mousePos[idx]) {
    //             nextPos[idx] = currentPos[idx] + speed[idx];
    //         } else if (currentPos[idx] > mousePos[idx]) {
    //             nextPos[idx] = currentPos[idx] - speed[idx];
    //         } else {
    //             nextPos[idx] = currentPos[idx];
    //         }
    //     }

    //     this.x = nextPos[0];
    //     this.y = nextPos[1];

    //   
    // }

//     move() {
//         let xDistance = (e.clientX * this.dpi) - this.x;
//         let yDistance = (e.clientY * this.dpi) - this.y;
//         let distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

//         if (distance > 1) {
//             this.x += xDistance * easingAmount;
//             this.y += yDistance * easingAmount;
//         }
// }



    draw() {
        this.context.fillStyle = this.color;
        this.context.beginPath();
        this.context.arc(
            this.x, this.y,
            this.radius, 0, Math.PI * 2,
        );
        this.context.closePath();
        this.context.fill();
    


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