let modalBG = document.getElementById('start-modal');
let modalFG = document.getElementsByClassName('modal-content')[0];
let start = document.getElementsByClassName("start")[0];

start.onclick = function () {
    modalBG.style.display = "none";
    modalFG.style.display = "none";
}

