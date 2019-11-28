import React from 'react';

const Todo = props => {
    let verboseClassName = "item";
    if (props.item.completed) {
        verboseClassName = verboseClassName + " completed";
    }

    //id vs item vs task vs Item vs Todo??????
    const handleClick = () => {
        props.toggleCompleted(props.item.id);
    };

    // <div className={`item${props.item.purchased ? ' purchased' : ''}`}>
    return (
        <div onClick={handleClick} className={verboseClassName}>
            <p>{props.item.task}</p>
        </div>
    )
    
}

export default Todo;