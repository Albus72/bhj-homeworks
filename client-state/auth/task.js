const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const localUserId = JSON.parse(localStorage.getItem('userId'));

if (localUserId != null) {
  authorization(localUserId);
}

form.addEventListener('submit', function (event) {
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);
  xhr.send(formData);

  xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE) {
      let auth = JSON.parse(xhr.responseText);

      if (auth.success) {
        localStorage.setItem('userId', JSON.stringify(auth.user_id));
        authorization(auth.user_id);
      } else {
        clearInput();
        alert('Неверный логин/пароль');
      }
    }
  });
  event.preventDefault();
});

function authorization(id) {
  signin.classList.toggle('signin_active');
  welcome.classList.toggle('welcome_active');
  userId.innerText = id;

  let signOut = document.getElementById('sign__out');

  if (signOut) {
    signOut.remove();
    localStorage.removeItem('userId');
    clearInput();
  } else {
    welcome.insertAdjacentHTML(
      'afterEnd',
      '<button id="sign__out" style="margin: 10px auto 0;">Выйти</button>'
    );
    signOut = document.getElementById('sign__out');
    signOut.addEventListener('click', function () {
      authorization('');
    });
  }
}

function clearInput() {
  let inputControl = document.querySelectorAll('.control');
  inputControl.forEach((element) => (element.value = ''));
}
