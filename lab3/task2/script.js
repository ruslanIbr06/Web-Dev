const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const emptyMessage = document.getElementById('emptyMessage');

updateEmptyMessage();

todoForm.addEventListener('submit', handleAddTodo);

function handleAddTodo(event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  if (!todoText) {
    alert('Please enter a task');
    return;
  }

  createTodoItem(todoText);

  todoInput.value = '';
  todoInput.focus();

  updateEmptyMessage();
}

function createTodoItem(text) {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-checkbox';
  checkbox.addEventListener('change', handleToggleDone);

  const textSpan = document.createElement('span');
  textSpan.className = 'todo-text';
  textSpan.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', handleDeleteTodo);

  listItem.appendChild(checkbox);
  listItem.appendChild(textSpan);
  listItem.appendChild(deleteBtn);

  todoList.appendChild(listItem);
}

function handleToggleDone(event) {
  const checkbox = event.target;
  const todoItem = checkbox.closest('.todo-item');

  if (checkbox.checked) {
    todoItem.classList.add('completed');
  } else {
    todoItem.classList.remove('completed');
  }
}

function handleDeleteTodo(event) {
  const deleteBtn = event.target;
  const todoItem = deleteBtn.closest('.todo-item');

  todoItem.style.transition = 'opacity 0.3s ease';
  todoItem.style.opacity = '0';

  setTimeout(() => {
    todoItem.remove();
    updateEmptyMessage();
  }, 300);
}

function updateEmptyMessage() {
  const isEmpty = todoList.children.length === 0;

  if (isEmpty) {
    emptyMessage.classList.add('show');
  } else {
    emptyMessage.classList.remove('show');
  }
}
