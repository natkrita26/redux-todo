// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../todoSlice';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.text}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>❌ ลบ</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;