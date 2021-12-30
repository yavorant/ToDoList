// alert('it works!');

let todos = [];
while(true) {
  let rawUserInput = prompt("What would you like to do?");
  let userInput = rawUserInput.toLowerCase();
  
  console.log(userInput);
  if (userInput === 'new') {
    let newTodo = prompt("Add a new todo");
    console.log('Create a todo!');
    todos = todos.push(newTodo);
  } else if (userInput === 'list') {
    console.log('List todos!');
  } else if (userInput === 'delete') {
    console.log('Delete a todo!');
  } else if (userInput === 'quit') {
    break;
  }  
}
  
console.log('The End');
console.log(todos);
