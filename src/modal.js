const Game = require('./game');


class Modal {
    constructor(canvasWidth, canvasHeight, context, dpi) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.context = context;
        this.dpi = dpi;

        this.startModalBG = document.getElementById('start-modal');
        this.startModalFG = document.getElementsByClassName('modal-content')[0];
        this.start = document.getElementsByClassName("start")[0];
    
        this.pauseModalBG = document.getElementById('pause-modal');
        this.pauseModalFG = document.getElementsByClassName('modal-content')[0];
        this.resume = document.getElementsByClassName("resume")[0];

        this.start.addEventListener("click", () => {
            this.startGame();
        })

        this.resumeGame = this.resumeGame.bind(this);
        this.pauseGame = this.pauseGame.bind(this);
        this.startGame = this.startGame.bind(this);
    }


    resumeGame(event) {
        if (event.keyCode === 32 || event === 'click') {
            this.pauseModalBG = document.getElementById('pause-modal');
            this.pauseModalBG.style.display = "none";

            document.removeEventListener('keydown', this.resumeGame);
            document.addEventListener('keydown', this.pauseGame);
        }
    }

    pauseGame(event) {
        if (event.keyCode === 32) {
            this.pauseModalBG = document.getElementById('pause-modal');
            this.pauseModalBG.style.display = "flex";

            this.pauseModalFG = document.getElementsByClassName('modal-content')[0];
            this.resume = document.getElementsByClassName("resume")[0];

            document.removeEventListener('keydown', this.pauseGame);
            
            this.resume.addEventListener('click', () => {
                this.resumeGame('click');
            });
      
            document.addEventListener('keydown', this.resumeGame);
        }
    }



    startGame() {
        this.startModalBG.style.display = "none";
        this.startModalFG.style.display = "none";

        const game = new Game(this.canvasWidth, this.canvasHeight, this.context, this.dpi);
        debugger
        game.start();

        document.addEventListener('keydown', this.pauseGame);
    }      
}

module.exports = Modal;


