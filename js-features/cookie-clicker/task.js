let clickerStatus = document.getElementsByClassName('clicker__status');
clickerStatus[0].innerHTML = clickerStatus[0].innerHTML + '<p>Скорость клика: <span id="clicker__speed">0</span></p>';

let clickerСounterId = document.getElementById('clicker__counter');
let clickerSpeedId = document.getElementById('clicker__speed');
let cookie = document.getElementById('cookie');
let clickerСounter = clickerСounterId.textContent;
let clickerSpeed = clickerSpeedId.textContent;
let nextClick = new Date();
let intervalClick;

function cookieClick() {
    clickerСounter++; 
    clickerСounterId.textContent = clickerСounter; 

    if (cookie.width === 200) {
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }

    intervalClick = new Date() - nextClick;
    clickerSpeedId.textContent = (1 / (intervalClick / 1000)).toFixed(2);
    nextClick = new Date();
}

cookie.onclick = cookieClick;