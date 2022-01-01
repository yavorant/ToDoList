// alert('it works!');

let userInput = prompt("What would you like to do?");
let todos = ['dog', 'cat', 'man'];
while(true) {  
  if (userInput === 'new') {
    let newTodo = prompt(' Add a new todo! ');
    console.log('***** Add a new todo *****');
    todos.push(newTodo);
    console.log(`"${newTodo}" added to the list`);
    // console.log('todos: ', todos);

  } else if (userInput === 'list') {
    console.log('***** List *****');
    for (let i = 0; i < todos.length; i++) { 
      console.log(` ${i} : ${todos[i]}`)
    }
  } else if (userInput === 'delete') {
    console.log('***** WARNING a todo item will be deleted!!! *****');
    let index = prompt(' Enter an index of element that will be deleted ');
    let deletedItem = todos[index];
    todos.splice(index, 1);
    console.log(`Unfortunately the "${deletedItem}" item was deleted forever :(`);
  } else if (userInput === 'quit') {
    break;
  }  
  userInput = prompt("What would you like to do?");
}
  
console.log('The End');
