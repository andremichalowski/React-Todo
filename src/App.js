import React from 'react';


import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './styles.css';


const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  
  state = {
    tasks: data
  };
  
  toggleCompleted = itemId => {
    console.log("toggleCompleted: ", itemId);

    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addTask = taskName => {
    console.log("add task: ", taskName);

    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  clearCompleted = itemId => {
    console.log("clearCompleted");
    this.setState({
      tasks: this.state.tasks.filter(item => {
        return !item.completed;
      })
    })
  }

  render() {
    return (
      <div>
        <h2>DAILY TO-DO:</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList 
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
