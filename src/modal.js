const Game = require('./game');


class Modal {
    constructor(canvasWidth, canvasHeight, context, dpi) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.context = context;
        this.dpi = dpi;

        this.player = "player";

        this.startModalBG = document.getElementById('start-modal');
        this.startModalBG.style.display = "none";
        this.start = document.getElementsByClassName("start")[0];
        this.start.addEventListener("click", () => {
            this.startGame();
        })
    
        this.pauseModalBG = document.getElementById('pause-modal');
        this.resume = document.getElementsByClassName("resume")[0];

        this.gameoverModalBG = document.getElementById('gameover-modal');
        this.winModalBG = document.getElementById('win-modal')

        this.resumeGame = this.resumeGame.bind(this);
        this.pauseGame = this.pauseGame.bind(this);
        this.startGame = this.startGame.bind(this);
        this.draw = this.draw.bind(this);
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

            this.resume = document.getElementsByClassName("resume")[0];

            document.removeEventListener('keydown', this.pauseGame);
            
            this.resume.addEventListener('click', () => {
                this.resumeGame('click');
            });
      
            document.addEventListener('keydown', this.resumeGame);
        }
    }

    startGame() {
        this.gameoverModalBG.style.display ="none";
        this.startModalBG.style.display = "none";
        this.winModalBG.style.display = "none";

        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
        this.game = new Game(this.canvasWidth, this.canvasHeight, this.context, this.dpi, this);
        this.player = this.game.board.player;
        this.game.start();

        document.addEventListener('keydown', this.pauseGame);
    }  
    
    draw() {
        if (this.player === null || this.player.consumed === true) {
            this.gameoverModalBG.style.display = "flex";
            this.restart = document.getElementsByClassName("restart")[0];
            this.restart.addEventListener('click', this.startGame);
        } else if (this.player.won === true) {
            this.winModalBG.style.display = "flex";
            this.restart = document.getElementsByClassName("restart")[1];
            this.restart.addEventListener('click', this.startGame);
        } else {
            this.gameoverModalBG.style.display = "none";
        }
    }
}

module.exports = Modal;


