    const todobtn = document.getElementById('todobtn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const todoCounter = document.getElementById('todo-counter');

    todobtn.onclick = function addTodo() {
    const todoInputclear = todoInput.value.trim();
    
    if (todoInputclear === '') {
        alert('Please enter a valid todo.');
        return;
    }

    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    const todoText = document.createElement('span');
    todoText.textContent = todoInput.value;
    
    todoItem.appendChild(checkbox);

    todoItem.appendChild(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = ''; 

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        todoList.removeChild(todoItem);
            updateTodoCounter();
    };

    todoItem.appendChild(deleteButton);


    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        const updatedText = prompt('Edit todo:', todoText.textContent);
        if (updatedText !== null) {
            todoText.textContent = updatedText;
        }
    };

    todoItem.appendChild(editButton);
            

          
            
    }
        
        

