import React from 'react';
import './App.css';

import TodoList from './TodosList';

const App: React.FC = () => {
  const todos = [{ id: 'ts1', text: 'Finish this course'}, { id: 'ts2', text: 'Finish eating'}]

  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
}

export default App;
