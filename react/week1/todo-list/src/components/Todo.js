import React from 'react';

function Todo(props) {
    return (
            <li className="list-items">
                <span>{props.item.id}</span>
                <span>{props.item.todo}</span>
                <span>{props.item.deadline}</span>
            </li>
        
    );
}

export default Todo;


