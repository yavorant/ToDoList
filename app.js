// alert('it works!');

let userInput = prompt("What would you like to do?");
while(true) {
  userInput = prompt("What would you like to do?");
  
  // if (userInput === 'new') {
  //   let newTodo = prompt("Add a new todo");
  //   console.log('Create a todo!');
  //   todos = todos.push(newTodo);
  // } else if (userInput === 'list') {
  //   console.log('List todos!');
  // } else if (userInput === 'delete') {
  //   console.log('Delete a todo!');
  // } else 
  if (userInput === 'quit') {
    break;
  }  
}
  
console.log('The End');
