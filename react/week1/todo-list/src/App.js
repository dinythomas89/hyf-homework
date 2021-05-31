import './App.css';
import Header from './components/Header';
import ListHeader from './components/TodoListHeader';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="container" >
            <Header />
            <ListHeader />
            <TodoList />
        </div>
    );
}

export default App;