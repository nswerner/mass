let startModalBG = document.getElementById('start-modal');
let startModalFG = document.getElementsByClassName('modal-content')[0];
let start = document.getElementsByClassName("start")[0];

let pauseModalBG = document.getElementById('pause-modal');
let pauseModalFG = document.getElementsByClassName('modal-content')[0];
let resume = document.getElementsByClassName("resume")[0];


const resumeGame = function(event) {
    if (event.keyCode === 32) {
        let pauseModalBG = document.getElementById('pause-modal');
        pauseModalBG.style.display = "none";

        document.removeEventListener('keydown', resumeGame);
        document.addEventListener('keydown', pauseGame);
    }
}

const pauseGame = function(event) {
    if (event.keyCode === 32) {
        let pauseModalBG = document.getElementById('pause-modal');
        pauseModalBG.style.display = "flex";

        let pauseModalFG = document.getElementsByClassName('modal-content')[0];
        let resume = document.getElementsByClassName("resume")[0];

        document.removeEventListener('keydown', pauseGame);
        
        resume.onclick = function () {
            pauseModalBG.style.display = "none";
        }

        document.addEventListener('keydown', resumeGame);
    }
}



start.onclick = function () {
    startModalBG.style.display = "none";
    startModalFG.style.display = "none";

    document.addEventListener('keydown', pauseGame);
        
}

