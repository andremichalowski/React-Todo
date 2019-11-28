import React from 'react';

import Todo from '../TodoComponents/Todo';

const TodoList = props => {

    return(
        <div className="TodoList">
            {props.tasks.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    //purchasedtoggle to add later
                />
            ))}
            <button>
                Clear Purchased
            </button>
        </div>
        
    )

}

export default TodoList;
