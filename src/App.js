// src/App.js
import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>📝 To-Do List ด้วย Redux</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;