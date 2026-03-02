const loadTodo = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayTodo(data);
        })
}


// "id": 2,
// "title": "quis ut nam facilis et officia qui",
// "completed": false

const displayTodo = (todos) => {
    // 1: get the container
    const todoContainer = document.getElementById('todo-container');
    // 2: loop through the todos
    todos.forEach(todo => {


        const todoCard = document.createElement('div');
        todoCard.innerHTML = `
        <div class="todo-card">
        <h4>${todo.title}</h4>
        <p> ${todo.completed == true ? `<i class="fa-solid fa-square-check"></i> Completed` : `<i class="fa-solid fa-rectangle-xmark"></i> Not Completed`} </p>
        </div>
        `;
        // <i class="fa-regular fa-square-check"></i>
    //    <i class="fa-solid fa-rectangle-xmark"></i>


        todoContainer.appendChild(todoCard)
        
    });
    
}
loadTodo()
// const loadTodo = () => {
//     const url = 'https://jsonplaceholder.typicode.com/todos';
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             // VUL EIKHANE CHILO: console.log er bodole function call hobe
//             displayTodo(data); 
//         })
// }

// const displayTodo = (todos) => {
//     const todoContainer = document.getElementById('todo-container');
    
//     // Safety check: Protibaro data load korle container clean kora bhalo
//     todoContainer.innerHTML = ''; 

//     todos.forEach(todo => {
//         const todoCard = document.createElement('div');
//         // Extra div wrapper bad diye direct class add kora better
//         todoCard.classList.add('todo-card'); 
        
//         todoCard.innerHTML = `
//             <h4>${todo.title}</h4>
//             <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
//         `;

//         todoContainer.appendChild(todoCard);
//     });
// }

// loadTodo();