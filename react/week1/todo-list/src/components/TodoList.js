import React from 'react';
import Todo from './Todo';

function TodoList() {
    const todoListArray = [
        { id: 1, todo: 'Update Linkedln profile', deadline: 'Wed Sep 13 2017' },
        { id: 2, todo: 'Update Github profile', deadline: 'Thu Sep 14 2017' },
        { id: 3, todo: 'Create CV', deadline: 'Fri Sep 15 2017' },
        { id: 4, todo: 'Complete the project', deadline: 'Fri Aug 15 2017' },
        { id: 5, todo: 'Search for jobs', deadline: 'Tue Sep 23 2017' },
    ];
    const todoList = todoListArray.map((todo) =>
        <Todo key={todo.id} item={todo} />
    )
    return (
        <div>{todoList}</div>
    );
}

export default TodoList;