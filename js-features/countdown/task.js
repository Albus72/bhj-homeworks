const timer = document.getElementById('timer');
let countdownTimer = timer.textContent;
let timerNew = prompt(
  'Установить время обратного отсчета в сек - ОК, как в исходнике - Отмена',  [120]);
if (timerNew) {
  countdownTimer = timerNew;
}

timer.textContent = countdownTimerNew(countdownTimer);

function timerFunction() {
  countdownTimer--;
  if (countdownTimer === 0) {
    clearInterval(getCountdownTimer);
    alert('Вы победили в конкурсе!');
    // location.assign('https://dropmefiles.com.ua/ru/C8PAshS');
    location = 'https://dropmefiles.com.ua/ru/C8PAshS';
    // countdownTimerLink();
  }
  timer.textContent = countdownTimerNew(countdownTimer);
}

function countdownTimerNew(countdownTimer) {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  if (countdownTimer > 59) {
    minutes = Math.floor(countdownTimer / 60);
    if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
    }
    seconds = countdownTimer % 60;
  } else {
    seconds = countdownTimer;
  }

  hours = hours.toLocaleString('ru-RU', { minimumIntegerDigits: 2 });
  minutes = minutes.toLocaleString('ru-RU', { minimumIntegerDigits: 2 });
  seconds = seconds.toLocaleString('ru-RU', { minimumIntegerDigits: 2 });

  countdownTimer = hours + ':' + minutes + ':' + seconds;

  return countdownTimer;
}

// function countdownTimerLink() {
//     let link = document.getElementsByClassName('logo__link');
//     link[0].href = 'https://dropmefiles.com.ua/ru/C8PAshS';
//     link[0].click();
// }

let getCountdownTimer = setInterval(timerFunction, 1000);
