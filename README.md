#### Instructions (Updated)

[x] - Review notes for:
  [x] - Class Constructors
  [x] - Props
  [x] - Event Handlers
  [x] - Recorded Lecture

[x] - Play EDM music
  [x] - https://soundcloud.com/user2727940/deadmau5-strobe

[] - **Base Components/Functionalit** for the to do list
  [] - `<App />`
    [x] - imports
    [x] - add H1 title/heading
    [x] - add test 'todo' array
    [x] - add state
      [x] - add state information
    [x] - render
      [x] - create class component for TodoList
      [x] - add (export) state to TodoList
  [] - `<TodoList >`
    [] - imports
    [] - create function
      [] - map the original todo Array
        **[] - add >> task, id, completed << 
      [] - return TodoItem
      [] - return button
  [] - `<Todo />` 
    [] - imports 
    [] - create function 
      [] - return 

[] - **Completed** Todo Functionality
  [] - `<App />`
    [] - toggleCompleted fxn
    [] - add (export) toggle completed class component to TodoList
  [] - `<TodoList >`
    [] - update "completed" CC to include toggle fxn
  [] - `<Todo />` 
    [] - if statement for completed
    [] - create handler for click to toggle for todo item.id
    [] - add onclick referencing handler add classname w/ reference to if statement
[] - **Add** Todo Function Functionality
  [] - `<App />`
    [] - create function
    [] - console.log
    [] - setState
      [] - spread operator
      [] - task: itemName
      [] - id: Date.now()
      [] - completed: false
    [] - add new add fxn to TodoListForm
  [] - `<TodoList >`
    [] - none
  [] - `<Todo />` 
    [] - none
  [] - `<TodoListForm >`
    [] - constructor
      [] - state
      [] - (see notes for full list)
      [] - add and clear buttons
[] - **Clear** Completed Functionality
  [] - `<App />`
      [] - create fxn
        [] - add state
        [] - .filter the todo's from the original state
        [] - write expression returning everything not equal to completed using "!"
      [] - add CC to todoList
  [] - `<TodoList >`
    [] - add clearCompleted with onClick to button 
  [] - `<Todo />`
    [] - none
[] - Other
  [] - move handler functions to App.js



#### Stretch Problems

[] - **Persist your data** in `window.localStorage()` hint: you may have to pass your data to a stringifier to get it to live inside the `localStorage()` of the browser. This will cause it to persist past the page refresh.

[] - **Search Functionality** Add a input bar that allows you to search through your tasks and only show the ones that match the search input.

[] - **Hosting** Create a [Netlify Account](https://www.netlify.com/) and follow the tutorial on how to host your shiny new todo app on the world wide web.
