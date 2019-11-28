import React from 'react';

import Todo from '../TodoComponents/Todo';

const TodoList = props => {

    return(
        <div className="TodoList">
            {props.tasks.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <button className="button" onClick={props.clearCompleted}>
                Clear Purchased
            </button>
        </div>
        
    )

}

export default TodoList;
