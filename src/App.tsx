import React, {useState} from 'react';
import './App.css';

import TodoList from './TodosList';
import NewTodo from './NewTodo';

const App: React.FC = () => {
  // const todos = [{ id: 'ts1', text: 'Finish this course'}, { id: 'ts2', text: 'Finish eating'}]
  const [todos, setTodos] = useState<{id: string, text: string}[]>([]);

  const todoAddHandler = (text: string) => {
    const newElement = {
      id: Math.random().toString(),
      text: text
    }
    setTodos(prevState => ([...prevState, newElement]))
  }

  return (
    <div className="App">
      <NewTodo addTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
