// DOM Elements 
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const clearCompletedBtn = document.getElementById('clear-completed');
const clearAllBtn = document.getElementById('clear-all');

// Todos Array 
let todos = [];

// Functions 
function renderList() {
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');

    const left = document.createElement('div');
    left.className = 'left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const span = document.createElement('span');
    span.textContent = todo.text;
    if (todo.completed) span.classList.add('completed');

    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      renderList();
    });

    left.appendChild(checkbox);
    left.appendChild(span);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      renderList();
    });

    li.appendChild(left);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Event Listeners 
addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') return;

  todos.push({ text, completed: false });
  input.value = '';
  renderList();
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addBtn.click();
  }
});

clearCompletedBtn.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed);
  renderList();
});

clearAllBtn.addEventListener('click', () => {
  if (!confirm('Clear all tasks?')) return;
  todos = [];
  renderList();
});

// Initial Render 
renderList();
