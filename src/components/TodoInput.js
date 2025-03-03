// src/components/TodoInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';

function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="📝 เพิ่มงานที่ต้องทำ..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">➕ เพิ่ม</button>
    </form>
  );
}

export default TodoInput;