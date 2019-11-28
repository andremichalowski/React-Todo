#### Instructions (Updated)

[x] - Review notes for:
  [x] - Class Constructors
  [x] - Props
  [x] - Event Handlers
  [x] - Recorded Lecture

[x] - Play EDM music
  [x] - https://soundcloud.com/user2727940/deadmau5-strobe

[] - **Base Components/Functionality** for the to do list
  [] - `<App />`
    [x] - imports
    [x] - add H1 title/heading
    [x] - add test 'todo' array
    [x] - add state
      [x] - add state information
    [x] - render
      [x] - create class component for TodoList
      [x] - add (export) state to TodoList
  [x] - `<TodoList >`
    [x] - imports
    [x] - create function
      [x] - map the original todo Array
        **[x] - add >> task, id, completed << 
      [x] - return TodoItem
      [x] - return button
  [x] - `<Todo />` 
    [x] - imports 
    [x] - create function 
      [x] - return 

[x] - **ToggleCompleted** Todo Functionality
  [x] - `<App />`
    [x] - toggleCompleted fxn
    [x] - add (export) toggle completed class component to TodoList
  [x] - `<TodoList >`
    [x] - update "completed" CC to include toggle fxn
  [x] - `<Todo />` 
    [x] - if statement for completed
    [x] - create handler for click to toggle for todo item.id
    [x] - add onclick referencing handler add classname w/ reference to if statement
[x] - **Add** Todo Function Functionality
  [x] - `<App />`
    [x] - create function
    [x] - console.log
    [x] - setState
      [x] - spread operator
      [x] - task: itemName
      [x] - id: Date.now()
      [x] - completed: false
    [x] - add new add fxn to TodoListForm
  [x] - `<TodoList >`
    [x] - none
  [x] - `<Todo />` 
    [x] - none
  [x] - `<TodoListForm >`
    [x] - constructor
      [x] - state
      [x] - (see notes for full list)
      [x] - add and clear buttons
[] - **Clear** Completed Functionality
  [x] - `<App />`
      [x] - create fxn
        [x] - add state
        [x] - .filter the todo's from the original state
        [x] - write expression returning everything not equal to completed using "!"
      [x] - add CC to todoList
  [x] - `<TodoList >`
    [x] - add clearCompleted with onClick to button 
  [] - `<Todo />`
    [] - none
[] - Other
  [] - move handler functions to App.js
  []  - styling



#### Stretch Problems

[] - **Persist your data** in `window.localStorage()` hint: you may have to pass your data to a stringifier to get it to live inside the `localStorage()` of the browser. This will cause it to persist past the page refresh.

[] - **Search Functionality** Add a input bar that allows you to search through your tasks and only show the ones that match the search input.

[] - **Hosting** Create a [Netlify Account](https://www.netlify.com/) and follow the tutorial on how to host your shiny new todo app on the world wide web.
