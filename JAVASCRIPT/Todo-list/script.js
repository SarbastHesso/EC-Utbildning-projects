const form = document.querySelector("#form");
const sorter = document.querySelector("#sort");
const output = document.querySelector("#output");
const url = 'https://jsonplaceholder.typicode.com/todos';

let todos = [];


const getTodos = async () => {
    const res = await fetch(url + '?_limit=10');
    const data = await res.json();
    todos = data;
    listTodos();
};
getTodos();



const listTodos = () => {
    output.innerHTML = '';
    todos.forEach (todo => {
        if (todo.completed === true){
            newTodo =
            `<div id="${todo.id}" class="todo shadow checked">
            <div class="center">
                <i class="fas fa-check check-mark"></i>
                <h4>${todo.title}</h4>
            </div>
           <i class="fas fa-trash-alt"></i>
            </div>`
        } else {
            newTodo =
            `<div id="${todo.id}" class="todo shadow">
            <div class="center">
                <i class="fas fa-check check-mark"></i>
                <h4>${todo.title}</h4>
            </div>
            <i class="fas fa-trash-alt"></i>
            </div>`
        }
        output.innerHTML += newTodo;
    })
}


const createTodo = async (title) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: title,
            completed: false
        })
    });
    const todo = await res.json();
    todo.id = Date.now();
    todos.unshift(todo);
    listTodos();
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector("#input");
    const error = document.querySelector("#error");

    if (input.value !== ''){
        error.innerText = '';
        input.classList.remove('is-invalid');
        createTodo(input.value);
        input.value = '';
    } else {
        error.innerText = 'You must write something!';
        input.classList.add('is-invalid');
    }
})


output.addEventListener ('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == 'H4'){
        todos.forEach(todo => {
            if (todo.id == e.target.parentNode.parentNode.id){
                if (todo.completed == false){
                    todo.completed = true;
                } else {
                    todo.completed = false;
                }
            };
            listTodos();
        })
    } else if (e.target.tagName == 'I'){
        todos.forEach (todo => {
            if (todo.id == e.target.parentNode.id){
                    if (todo.completed == true){
                    todos = todos.filter(todo => todo.id != e.target.parentNode.id) 
                };
            };
            listTodos(todos);
        }); 
    };
});


sorter.addEventListener('click', (e) => {
    e.preventDefault();
    if (sorter.textContent == 'Sort'){
        todos.sort((a,b) => a.completed - b.completed);
        sorter.textContent = 'Unsort';
        listTodos();
    } else if (sorter.textContent == 'Unsort'){
        todos.sort((a,b) => a.id - b.id);
        sorter.textContent = 'Sort';
        listTodos();
    }
});


