import React from 'react';
import Todo from './Todo';


const TodoList = ({ todoList, deleteTodo }) => {
    return (
        <ul>
            {todoList.map(todo => {
                return (
                    <li key={todo.id} className="list-item">
                        <Todo todo={todo} deleteTodo={deleteTodo} />
                    </li>
                )
            })}
        </ul>
    );
};

export default TodoList;