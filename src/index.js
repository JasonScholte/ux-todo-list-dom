
let todos = [
    {
        completed: false,
        description: "Take Jim to the hair salon"
    },
    {
        completed: true,
        description: "Drop off wedding invitation at mailbox"
    },
    {
        completed: false,
        description: "Pick up the cake"
    },
    {
        completed: false,
        description: "Call the caterers"
    }
];
// my new code for onclick

let button = document.querySelector(`#bttn`)
function onClicker() {
    console.log("")
}
button.onclick = onClicker;

// End of new code
function renderTodoApp() {
    let app = document.querySelector("#app")
    let h1 = document.createElement("h1")


    // my code
let todosList = document.createElement("ul");
todosList.classList.add("todoing");


    h1.innerText = "Todo List"

    app.appendChild(h1)

// my code
    document.body.append(todosList);


    for (let i=0; i< todos.length; i++){
        let todo = todos[i];
        let completed = todo.completed;

        let todosMark = `
            <li class="todo-list">
                <input type="checkbox" checked></input>
                 <p>${todo.completed}</p>
                 <p>${todo.description}</p>
            </li>
        `

        todosList.innerHTML += todosMark;
        
    }
    // and maybe some here
}

renderTodoApp()
