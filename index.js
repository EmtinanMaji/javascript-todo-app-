const todoInput  = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoCounter = document.getElementById('todo-counter');
const searchInput = document.getElementById('search-input').value.toLowerCase();

let todos = [];

        //get
        window.onload = () => {
            const storedTodos = JSON.parse(localStorage.getItem('todos'));
            if (storedTodos) {
                todos = storedTodos;
                displayList();
            }
        };
        
        const displayList = () =>{

            while (todoList.firstChild) {
                todoList.removeChild(todoList.firstChild);
            }

            todos.forEach((todo, index) => {
                const todoItem = document.createElement('div');
                todoItem.classList.add('todo-item');
                todoItem.textContent = index+1 +"-";

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                todoItem.appendChild(checkbox);

                const todoText = document.createElement('span');
                todoText.textContent = todo.description;
                todoItem.appendChild(todoText);

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('deleteButton');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => deleteTodo(index);
                todoItem.appendChild(deleteButton);

                const editButton = document.createElement('button');
                editButton.classList.add('editButton');
                editButton.textContent = 'Edit';
                editButton.onclick = () => editTodo(index);
                todoItem.appendChild(editButton);

                todoList.appendChild(todoItem);
                todoCounter.textContent = `Total Tasks: ${todos.length}`;
            });
        }
        //add
        const addTodo = () => {
            const todoValue  = todoInput.value.trim();
            if (todoValue  === '') {
                alert('Please enter a valid todo.');
                return;
            }else {
                todos.push({ description: todoValue  });
                saveTodosToLocalStorage();
                displayList();
                todoInput.value = '';
            }
        }
        //delete
        const deleteTodo = (index) => {
            todos.splice(index, 1);
            saveTodosToLocalStorage();
            displayList();
        }
        //edit
        const editTodo = (index) =>{
            const updatedText = prompt('Edit Todo:', todos[index].description);
            if (updatedText === '') {
                alert('You enter an empty string, Try again please.');
                return;
            }else {
                todos[index].description = updatedText.trim().toLowerCase();
                localStorage.setItem('todos', JSON.stringify(todos));
                displayList();
                
            }
          }

        //save-set
        const saveTodosToLocalStorage = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
