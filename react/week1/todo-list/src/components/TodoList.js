import React from 'react';
import Todo from './Todo';

function TodoList() {
    const todoListArray = [
        { id: 1, todo: 'Update Linkedln profile', deadline: new Date().toDateString() },
        { id: 2, todo: 'Update Github profile', deadline: new Date().toDateString() },
        { id: 3, todo: 'Create CV', deadline: new Date().toDateString() },
        { id: 4, todo: 'Complete the project', deadline: new Date().toDateString() },
        { id: 5, todo: 'Search for jobs', deadline: new Date().toDateString() },
    ];
    const todoList = todoListArray.map((todo) =>
        <Todo key={todo.id} item={todo} />
    )
    return (
        <ul>{todoList}</ul>
    );
}

export default TodoList;