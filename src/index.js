import './style.css';

class ToDoList {
  constructor() {
    this.toDo = JSON.parse(localStorage.getItem('toDo')) || [];
    this.clearBtn = document.querySelector('.clear-btn');
    this.toDoForm = document.querySelector('.to-do-form');
    this.toDoDiv = document.querySelector('.to-do-container');
    this.toDoForm.addEventListener('submit', this.addToDo.bind(this));
    this.clearBtn.addEventListener('click', this.clearCompleted.bind(this));
    this.render();
  }

  saveToLocalStorage() {
    localStorage.setItem('toDo', JSON.stringify(this.toDo));
  }

  render() {
    this.toDoDiv.innerHTML = '';
    this.toDo.forEach((todo) => {
      const ToDoElement = this.createToDo(todo);
      this.toDoDiv.appendChild(ToDoElement);
    });
  }

  removeToDo(removeToDo) {
    this.toDo = this.toDo.filter((toDo) => toDo !== removeToDo);
    this.saveToLocalStorage();
    this.render();
  }

  check(toDo) {
    const description = toDo.querySelector('.todo-description');
    const todo = this.toDo.find((item) => item.description === description.textContent);
    if (todo.completed === true) {
      todo.completed = false;
      description.classList.remove('strikethrough');
    } else {
      todo.completed = true;
      description.classList.add('strikethrough');
    }
    this.saveToLocalStorage();
  }

  clearCompleted() {
    this.toDo = this.toDo.filter((toDo) => !toDo.completed);
    this.saveToLocalStorage();
    this.render();
  }

  addToDo(event) {
    event.preventDefault();
    const toDoInput = document.getElementById('toDoInput');
    const newToDo = toDoInput.value;
    const newToDoObj = { description: newToDo, completed: false, index: this.toDo.length + 1 };
    this.toDo.push(newToDoObj);
    this.saveToLocalStorage();
    const ToDoElement = this.createToDo(newToDoObj);
    this.toDoDiv.appendChild(ToDoElement);
    this.toDoForm.reset();
  }

  createToDo(toDo) {
    const toDoApp = document.createElement('div');
    toDoApp.classList.add('to-do-element');
    toDoApp.innerHTML = `
      <div>
        <div>
          <input class="checkbox" ${toDo.completed ? 'checked' : ''} type="checkbox"></input>
          <p class="todo-description">${toDo.description}</p>
        </div>
        <button class="remove-btn"><i class="fa-regular fa-trash-can fa-2x"></i></button>
      </div>
      <hr>
    `;
    const deleteBtn = toDoApp.querySelector('.remove-btn');
    deleteBtn.addEventListener('click', () => {
      this.removeToDo(toDo);
      toDoApp.remove();
    });
    const checkBox = toDoApp.querySelector('.checkbox');
    checkBox.addEventListener('change', () => {
      this.check(toDoApp);
      if (toDo.completed === true) {
        this.toDo.completed = false;
        console.log(toDo);
      } else {
        this.toDo.completed = true;
        console.log(toDo);
      }
    });

    const toDoDescription = toDoApp.querySelector('.todo-description');
    toDoDescription.addEventListener('dblclick', () => {
      const editInput = document.createElement('input');
      editInput.classList.add('edit-input');
      editInput.value = toDo.description;
      toDoDescription.replaceWith(editInput);
      editInput.focus();

      editInput.addEventListener('blur', () => {
        toDo.description = editInput.value;
        const newToDoElement = this.createToDo(toDo);
        toDoApp.replaceWith(newToDoElement);
      });
    });
    return toDoApp;
  }
}

const toDo = new ToDoList();
toDo.render();
