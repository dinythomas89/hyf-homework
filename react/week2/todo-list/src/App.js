import React, { useState } from 'react';
import data from "./data.json";
import './App.css';
import Header from './Components/Header';
import SetTimer from './Components/SetTimer';
import TodoList from "./Components/TodoList";
import AddTodo from './Components/AddTodo';

function App() {
    const [todoList, setTodoList] = useState(data);

    const addTodo = (userInput) => {
        setTodoList([...todoList, {
            id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
            description: userInput,
        }]);
    }
    
    const deleteTodo = (id) => {
        const newTodoList = todoList.filter((task) => task.id !== id);
        setTodoList(newTodoList);
    }

    return (
        <div className="container">
            <Header />
            <SetTimer />
            {todoList.length > 0 ?
                <TodoList todoList={todoList} deleteTodo={deleteTodo} /> : "No Items"
            }
            <AddTodo addTodo={addTodo} />
        </div>
    );
}

export default App;
