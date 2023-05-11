// Import the class containing the method
const toDoList = require ('./index')

describe('ToDoList.addToDo', () => {
  it('should add a new to-do to the list and update the UI', () => {
    // Set up the initial state
    const initialToDo = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
    ];
    const toDoDiv = document.createElement('div');
    const toDoForm = document.createElement('form');
    const toDoInput = document.createElement('input');
    toDoInput.setAttribute('id', 'toDoInput');
    toDoForm.appendChild(toDoInput);

    todoList = new ToDoList(initialToDo, toDoDiv, toDoForm);

    const event = new Event('submit');
    toDoInput.value = 'Task 3';
    todoList.addToDo(event);


    expect(todoList.toDo).toHaveLength(3);
    expect(todoList.toDo[2]).toEqual({ description: 'Task 3', completed: false, index: 3 });

    const newToDoElement = toDoDiv.querySelector('li:last-child');
    expect(newToDoElement.textContent).toBe('Task 3');
    expect(newToDoElement.classList.contains('completed')).toBe(false);
    expect(newToDoElement.querySelector('input[type="checkbox"]').checked).toBe(false);
  });
});
