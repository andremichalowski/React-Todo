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
  
  render() {
    return (
      <div>
        <h2>DAILY TO-DO:</h2>
        <TodoList tasks={this.state.tasks} />;
      </div>
    );
  }
}

export default App;
