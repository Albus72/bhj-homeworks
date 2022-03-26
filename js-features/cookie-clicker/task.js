const clickerStatus = document.getElementsByClassName('clicker__status');
clickerStatus[0].innerHTML = clickerStatus[0].innerHTML + '<p>Скорость клика: <span id="clicker__speed">0</span></p>';

const clickerСounterId = document.getElementById('clicker__counter');
const clickerSpeedId = document.getElementById('clicker__speed');
const cookie = document.getElementById('cookie');
let clickerСounter = clickerСounterId.textContent;
let nextClick = new Date();
let intervalClick;

function cookieClick() {
    clickerСounter++; 
    clickerСounterId.textContent = clickerСounter; 
    
    cookie.width = clickerСounter % 2 ? 150 : 200;

    intervalClick = new Date() - nextClick;
    clickerSpeedId.textContent = (1 / (intervalClick / 1000)).toFixed(2);
    nextClick = new Date();
}

cookie.onclick = cookieClick;