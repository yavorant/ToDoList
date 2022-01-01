// alert('it works!');

let userInput = prompt("What would you like to do?");
let todos = [];
while(true) {  
  if (userInput === 'new') {
    let newTodo = prompt("Add a new todo");
    console.log('Create a todo!');
    todos.push(newTodo);
    console.log('newTodo: ', newTodo);
    console.log('todos: ', todos);

  } else if (userInput === 'list') {
    console.log('List todos: ', todos);
  } else if (userInput === 'delete') {
    console.log('Delete a todo!');
  } else if (userInput === 'quit') {
    break;
  }  
  userInput = prompt("What would you like to do?");
}
  
console.log('The End');
