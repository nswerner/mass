const Game = require("./game");
// const View = require("./view");

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        dpi = window.devicePixelRatio;

        function fix_dpi() {
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
        }
        
        const game = new Game(context);
        game.draw();
        // new View(game, context).start();
});