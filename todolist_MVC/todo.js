data = [
    {'title': 'take a nap', 'id': 0},
    {'title': 'class', 'id': 1},
    {'title': 'game', 'id': 2}
]

class Todos {
    #todoList;
    constructor() {
        // this.#todoList = data;
        this.#todoList = [];
    }
    setTodos(newTodos) {
        this.#todoList = newTodos;
    }
    getTodos() {
        return this.#todoList;
    }
}

class View {
    constructor() {
        this.todoList = document.querySelector("#todo-list");
        this.userInput = document.querySelector("#user-input");
        this.addBtn = document.querySelector("#add-btn");
    }
    render(todoList) {
        let template = '';
        todoList.forEach(todo => {
            template += `<li>${todo.title}</li>`;
        });
        this.todoList.innerHTML = template;
    }
    bindListener(elem, eventHandler) {
        elem.addEventListener('click', eventHandler);
    }
}


class Model {
    constructor(view) {
        this.view = view;
        this.todos = new Todos();
    }
    updateTodos(obj) {
        let newList = [obj, ...this.todos.getTodos()];
        this.todos.setTodos(newList);
        data.push(obj);
        console.log(obj);        
    }
}


class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.eventBind();
        // this.view.render(this.model.todos.getTodos());
        this.getApiData();
    }
    getApiData() {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        fetch(url).then((response) => {return response.json();}).then((apiData) => {
            console.log(apiData);
            // this.model.setTodos(apiData);
            // this.view.render(model.todos.getTodos());
            this.model.todos.setTodos(apiData)
            this.view.render(this.model.todos.getTodos());
        });
    }
    eventBind() {
        this.view.bindListener(this.view.addBtn, ()=>{
            if(this.view.userInput.value == '') return ;
            let obj = {'title': this.view.userInput.value, 'id': this.model.todos.getTodos().length};
            this.model.updateTodos(obj);
            this.view.userInput.value = '';
            this.view.render(this.model.todos.getTodos());
        });
    }
}

const view = new View();
const model = new Model(view);

const controller = new Controller(model, view);



