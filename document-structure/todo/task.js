const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
let localStorageNotes = JSON.parse(localStorage.getItem('notes'));

if (localStorageNotes != null) {  
    for (let i = 0; i < localStorageNotes.length; i++) {
        htmlNoteAdd(localStorageNotes[i]);
        taskRemoteFunc();
    }
};

function taskRemoteFunc() {
    let taskRemove = tasksList.querySelectorAll('.task__remove');
    taskRemove[0].addEventListener('click', function(event) {
        event.preventDefault();
        let task = taskRemove[0].closest('.task');
        let taskTitle = task.querySelector('.task__title').innerText;
        updateLocalStorage(null, taskTitle);
        task.remove();
    })
}

tasksAdd.addEventListener('click', function(event) {
    event.preventDefault();
    if (taskInput.value) {
        htmlNoteAdd(taskInput.value);
        updateLocalStorage(taskInput.value, null);
        taskRemoteFunc();
        taskInput.value = '';
    }
});

function updateLocalStorage(noteAdd, noteDel) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    if (notes != null && noteAdd != null) {notes.unshift(noteAdd)};
    if (notes === null && noteAdd != null) {notes = [noteAdd]};
    if (notes != null && noteDel != null) {notes.splice(notes.indexOf(noteDel), 1)};
    localStorage.setItem('notes', JSON.stringify(notes));
}

function htmlNoteAdd(note) {
    let html = `
    <div class="task">
        <div class="task__title">
            ${note}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;
    tasksList.insertAdjacentHTML('afterBegin', html);
}