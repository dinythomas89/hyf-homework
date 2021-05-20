import React from 'react';

function Todo(props) {
    console.log(props);
    return (
        <ul>
            <li className="list-items">
                <span>{props.item.id}</span>
                <span>{props.item.todo}</span>
                <span>{props.item.deadline}</span>
            </li>
        </ul>
    );
}

export default Todo;


