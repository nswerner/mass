const Game = require("./game");
const View = require("./view");



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
    
    height = canvas.height;
    width = canvas.width;

    const game = new Game(height, width, context);
    new View(game, height, width, context);
    game.draw();

    debugger
});

// export const canvas;
// export const context;
// export const game;