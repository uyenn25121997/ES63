export default class TodoList{

    todoArr = []

    addTodo(todo) {
        this.todoArr.push(todo);
    }

    renderTodo(){
        let newArr = this.todoArr.map((value, index) => { 
            let {content, status} = value;
            if(status == 0){
                return `
                <li>${content}
                <div><i class="fa-sharp fa-solid fa-trash" onclick="removeTodo(${index})"></i >
                    <i class="fa-regular fa-circle-check" onclick="updateTodoMain(${index})"></i>
                    </div>
                </li>`
            }
         })
         document.querySelector("#todo").innerHTML = newArr.join("");
        // console.log(newArr)
    }

    updateTodo() {
        let doneArr = this.todoArr.map((value, index) => {
            let {content, status} = value;
            if(status == 1){
                return `
                <li>${content}
                <div><i class="fa-sharp fa-solid fa-trash" onclick="removeTodo(${index})"></i >
                    <i class="fa-regular fa-circle-check" onclick="updateTodoMain(${index})" style="color:green" ></i>
                    </div>
                </li>`
            }
        })
        document.querySelector("#completed").innerHTML = doneArr.join("");
    }
}