const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const body = document.querySelector('body');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE && xhr.status == 200) {
    let questionObject = JSON.parse(xhr.responseText);
    pollTitle.innerText = questionObject.data.title;
    for (let i = 0; i < questionObject.data.answers.length; i++) {
      pollAnswers.insertAdjacentHTML(
        'beforeEnd',
        `<button style="margin-right: 3px;" class="poll__answer">${questionObject.data.answers[i]}</button>`
      );
      let pollAnswer = pollAnswers.querySelectorAll('.poll__answer');
      pollAnswer[i].addEventListener('click', function () {
        modalWindow(i, questionObject.id, questionObject.data.answers[i]);
      });
    }
  }
});

xhr.open('get', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

function modalWindow(index, id, answer) {
  let modal = document.createElement('div');
  modal.style = `
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
    `;

  let modalContent = document.createElement('div');
  modalContent.style = `
        min-width: 300px;
        max-width: 450px;
        height: 130px;
        overflow: auto;
        background: #fff;
        position: relative;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    `;

  modalContent.innerHTML = `<div>Спасибо, ваш ответ: "${answer}", учтён!</div>
    <hr style="margin-top: 22px;" width="99%" color="#000" />`;

  let modalButton = document.createElement('a');
  modalButton.classList.add('modal__close');
  modalButton.style = `
        margin-top: 5px;
        margin-right: 5px;
        padding: 4px 8px;
        border: 1px;
        border-style: solid;
        align-self: flex-end;
        text-decoration: none;
    `;

  modalButton.href = '#';
  modalButton.innerText = 'Результаты опроса';
  modalContent.innerHTML += modalButton.outerHTML;
  modal.innerHTML += modalContent.outerHTML;
  body.appendChild(modal);
  modalClose(modal, id, index);
}

function modalClose(modal, id, index) {
  let close = document.querySelector('.modal__close');
  close.addEventListener('click', function (event) {
    event.preventDefault();
    modal.remove();

    const xhrPost = new XMLHttpRequest();
    xhrPost.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhrPost.setRequestHeader(
      'Content-type',
      'application/x-www-form-urlencoded'
    );
    xhrPost.send(`vote=${id}&answer=${index}`);
    xhrPost.addEventListener('readystatechange', () => {
      if (xhrPost.readyState === xhrPost.DONE && xhrPost.status == 200) {
        let stat = JSON.parse(xhrPost.responseText).stat;
        pollAnswers.innerText = '';

        let numberResponses = stat.reduce(function (prev, curr) {
          return prev + curr.votes;
        }, 0);

        for (let i = 0; i < stat.length; i++) {
          let percentage = (stat[i].votes / (numberResponses / 100)).toFixed(2); //
          pollAnswers.insertAdjacentHTML(
            'beforeEnd',
            `<div>${stat[i].answer}: <b>${percentage}%</b></div>`
          );
        }
      }
    });
  });
}
