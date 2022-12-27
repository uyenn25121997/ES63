import TodoList from './TodoList.js'
import Todo from './Todo.js'

const todoList = new TodoList()


let addNewTodo = () => {
    let content = document.querySelector("#newTask").value;
    let todo = new Todo(content,0)
    todoList.addTodo(todo)
    todoList.renderTodo()
}
window.addNewTodo = addNewTodo;


let updateTodoMain = (idArr) => {
    let {content} = todoList.todoArr[idArr]
    let todo = new Todo(content,1)
    todoList.todoArr[idArr] = todo
    todoList.updateTodo()
    todoList.renderTodo()
}
window.updateTodoMain = updateTodoMain;

let removeTodo = (id) => {
    todoList.todoArr.splice(id,1)
    todoList.renderTodo()
    todoList.updateTodo()
}
window.removeTodo = removeTodo;

let sortAZ = () => {
    todoList.todoArr.sort((a, b) => {
        const nameA = a.content.toUpperCase();
        const nameB = b.content.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      todoList.renderTodo()
}

window.sortAZ = sortAZ;

let sortZA = () => {
    todoList.todoArr.sort((a, b) => {
        const nameA = a.content.toUpperCase();
        const nameB = b.content.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
      todoList.renderTodo()
}

window.sortZA = sortZA;

