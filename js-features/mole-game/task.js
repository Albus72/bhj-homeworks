let hit = document.getElementById('dead');
let miss = document.getElementById('lost');

for (let index = 1; index < 10; index++) {
  getHole = (index) => document.getElementById(`hole${index}`);
  getHole(index).onclick = function () {
    if (getHole(index).classList.contains('hole_has-mole')) {
      hit.textContent++;
    } else {
      miss.textContent++;
    }
    if (miss.textContent === '5') {
      setTimeout(missAlert, 10);
    }
    if (hit.textContent === '10') {
      setTimeout(hitAlert, 10);
    }
  };
}

function missAlert() {
  alert('Не повезло. Попробуйте еще раз.');
  miss.textContent = 0;
  hit.textContent = 0;
}

function hitAlert() {
  alert('Поздравляю! Вы настоящий кротобой.');
  miss.textContent = 0;
  hit.textContent = 0;
}