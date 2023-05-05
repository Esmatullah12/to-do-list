import './style.css';

class ToDoList {
  constructor() {
    this.toDoDiv = document.querySelector('.to-do-container');
    this.toDo = [{ description: 'Wash dishes', completed: false, index: 1 },
      { description: 'Complete to-do project', completed: false, index: 2 },
      { description: 'Focus', completed: false, index: 3 }];
    this.render();
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
    this.render();
  }

  createToDo(toDo) {
    const toDoApp = document.createElement('div');
    toDoApp.classList.add('to-do-element');
    toDoApp.innerHTML = `
      <div>
        <div>
          <input class="checkbox" type="checkbox"></input>
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
    return toDoApp;
  }
}

const toDo = new ToDoList();
toDo.render();