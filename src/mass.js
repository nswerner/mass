const Game = require("./game");
const Modal = require("./modal");


document.addEventListener("DOMContentLoaded", () => {
    
    let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    dpi = window.devicePixelRatio;

    let style = {
        height() {
            return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
        },
        width() {
            return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
        }
    }

    canvas.setAttribute('width', style.width() * dpi);
    canvas.setAttribute('height', style.height() * dpi);
    
    canvasHeight = canvas.height;
    canvasWidth = canvas.width;

    const modal = new Modal(canvasWidth, canvasHeight, context, dpi);
    new Game(canvasWidth, canvasHeight, context, dpi, modal, 2).draw();

    this.startModalBG = document.getElementById('start-modal');
    this.startModalBG.style.display = "block";
});
