
// const todoForm = document.querySelector("#todo-form")
// const todoInput = document.querySelector("#todo-input")
// const todoList = document.querySelector("#todo-list")
// const formBtn = document.querySelector("#form-btn")


// let todos = [{
//     id: Date.now() + 1,
//     text: "Go to gym",
//     isCompleted: false,
// }, {
//     id: Date.now() + 2,
//     text: "Go to hii",
//     isCompleted: true,
// }, {
//     id: Date.now() + 3,
//     text: "Go to hello",
//     isCompleted: false,
// }]


// let editTodoId = null;

// todoForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const todoValue = todoInput.value.trim()

//     todos.push(todoValue)

//     if (!todoValue) {
//         return
//     }

//     if (editTodoId) {

//         todos = todos.map((todo) => {
//             if (todo.id === Number(editTodoId)) {
//                 return {
//                     ...todo,
//                     text: todoValue
//                 }
//             }
//             return todo
//         })

//         const li = document.querySelector(`li[data-id="${editTodoId}"]`)
//         li.querySelector("p").textContent = todoValue

//     }
//     else {
//         let newTodo = {
//             id: Date.now(),
//             text: todoValue,
//             isCompleted: false,
//         }
//         addTodo(newTodo)
//     }
//     todoInput.value = ""
// })



// function rendorTodo() {
//     todos.forEach(function (todo) {
//         addTodo(todo)
//     })

// }

// rendorTodo()



// function addTodo(todo) {
//     const li = document.createElement("li")
//     // li.textContent = todo.text

//     li.dataset.id = todo.id
//     li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`

//     li.innerHTML = `<input data-action="toggle" ${todo.id} ${todo.isCompleted ? 'checked' : ""} type="checkbox">
//                     <p class="flex-1 ${todo.isCompleted ? "line-through text-red-500" : ""}">${todo.text}</p>

//                     <div class="flex gap-2">
//                         <button data-action="edit" data-id=${todo.id}>Edit</button>
//                         <button data-action="delete" data-id=${todo.id}>Delete</button>
//                     </div>`

//     todoList.append(li)
// }


// //event delegation
// todoList.addEventListener("click", (e) => {

//     let li = e.target.closest('li')
//     let btn = e.target.closest('button')
//     let action = btn?.dataset.action
//     let id = li?.dataset.id
//     let checkbox = e.target.closest('input[type = "checkbox"]')

//     if (action === "edit") {
//         startEdit(id)
//     }


//     if (action === "delete") {
//         deleteTodo(e, id)
//     }

//     if (action === "toggle") {
//         todos = todos.map((todo) => {
//             if (todo.id === Number(id)) {
//                 return {
//                     ...todo,
//                     isCompleted: !todo.isCompleted
//                 }
//             }
//             return todo
//         })
//         rendorTodo()
//     }
// })



// function deleteTodo(e, id) {
//     e.target.closest('li').remove()

//     todos = todos.filter((todo) => {
//         console.log(id);
//         if (todo.id !== Number(id)) {
//             return todo
//         }
//     })
// }

// function startEdit(id) {
//     editTodoId = id;

//     let currentTodo = todos.find((todo) => {
//         if (todo.id === Number(id)) {
//             return todo
//         }
//     })

//     todoInput.value = currentTodo.text

//     formBtn.textContent = "Update"
// }




const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const formBtn = document.querySelector("#form-btn")
const taskCount = document.querySelector("#task-count")
const taskComplete = document.querySelector("#complete-count")


let todos = [{
    id: Date.now() + 1,
    text: "Go to gym",
    isCompleted: false,
}, {
    id: Date.now() + 2,
    text: "Go to hii",
    isCompleted: true,
}, {
    id: Date.now() + 3,
    text: "Go to hello",
    isCompleted: false,
}]

let editTodoId = null

todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const todoValue = todoInput.value.trim()

    if (!todoValue) {
        return
    }

    if (editTodoId) {
        todos = todos.map((todo) => {
            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todoValue
                }
            }
            return todo
        })

        const li = document.querySelector(`li[data-id="${editTodoId}"]`)
        li.querySelector("p").textContent = todoValue
    } else {
        let newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false,
        }
        todos.push(newTodo)
        addTodo(newTodo)
    }

    todoInput.value = ""
    editTodoId = null
    formBtn.textContent = "Add"
})

function rendorTodo() {
    todoList.innerHTML = ""

    todos.forEach(function (todo) {
        addTodo(todo)
    })
}

rendorTodo()

function addTodo(todo) {
    const li = document.createElement("li")

    li.dataset.id = todo.id
    li.className = "flex gap-2 border border-slate-300 p-4 rounded-xl"

    li.innerHTML = `
        <input data-action="toggle" data-id="${todo.id}" type="checkbox" ${todo.isCompleted ? "checked" : ""}>
        <p class="flex-1 ${todo.isCompleted ? "line-through" : ""}">${todo.text}</p>
        <div class="flex gap-2">
            <button data-action="edit" data-id="${todo.id}">Edit</button>
            <button data-action="delete" data-id="${todo.id}">Delete</button>
        </div>
    `

    todoList.append(li)

    taskCount.textContent = `TASK (${todos.length})`
    taskComplete.textContent = `COMPLETED: ${todos.filter((todo) => todo.isCompleted).length}`
    
}

todoList.addEventListener("click", (e) => {
    let li = e.target.closest("li")
    let btn = e.target.closest("button")
    let action = btn?.dataset.action
    let id = li?.dataset.id

    if (action === "edit") {
        startEdit(id)
    }

    if (action === "delete") {
        deleteTodo(e, id)
    }

    if (e.target.matches('input[type="checkbox"]')) {
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })

        rendorTodo()
    }
})

function deleteTodo(e, id) {
    e.target.closest("li").remove()

    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo
        }
    })
}

function startEdit(id) {
    editTodoId = id

    let currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) {
            return todo
        }
    })

    todoInput.value = currentTodo.text
    formBtn.textContent = "Update"
}








