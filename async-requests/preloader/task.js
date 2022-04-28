const loader = document.getElementById('loader');
const items = document.getElementById('items');
let localValute = JSON.parse(localStorage.getItem('valute'));

const url = 'https://netology-slow-rest.herokuapp.com';
const xhr = new XMLHttpRequest();

if (localValute != null) {
  loader.classList.remove('loader_active');
  for (let property in localValute) {
    htmlAdd(localValute[property]);
  }
}

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
    let valute = JSON.parse(xhr.responseText).response.Valute;
    localStorage.setItem('valute', JSON.stringify(valute));
    items.innerHTML = '';
    for (let property in valute) {
      htmlAdd(valute[property]);
    }
  }
});

xhr.open('get', url);
xhr.send();

function htmlAdd(value) {
  let html = `
    <div class="item">
        <div class="item__code">
            ${value.CharCode}
        </div>
        <div class="item__value">
            ${value.Value}
        </div>
        <div class="item__currency">
            руб.
        </div>
    </div>
    `;
  items.insertAdjacentHTML('afterBegin', html);
}
