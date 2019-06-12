const Game = require("./game");
const Modal = require("./modal");


window.onload = function() {
    
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

    let setAttrWidth = style.width() * dpi;
    let setAttrHeight = style.height() * dpi;
    
    canvasHeight = canvas.height;
    canvasWidth = canvas.width;

    const modal = new Modal(setAttrWidth, setAttrHeight, context, dpi);
    new Game(setAttrWidth, setAttrHeight, context, dpi, modal, 2).draw();

    this.startModalBG = document.getElementById('start-modal');
    this.startModalBG.style.display = "flex";
};


