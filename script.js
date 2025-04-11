
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


function updateStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

