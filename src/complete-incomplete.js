function check(toDo) {
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
export default check;