const clearButton = document.querySelector('.clear_button');
const deleteButton = document.querySelector('.delete_button');

const editor = document.getElementById('editor');
let textLocalStorage = JSON.parse(localStorage.getItem('editorText'));

if (textLocalStorage != null) {
  editor.value = textLocalStorage;
}

editor.addEventListener('input', function () {
  localStorage.setItem('editorText', JSON.stringify(editor.value));
});

clearButton.addEventListener('click', function () {
  editor.value = '';
  localStorage.removeItem('editorText');
});

deleteButton.addEventListener('click', function () {
  editor.value = '';
  localStorage.clear();
});