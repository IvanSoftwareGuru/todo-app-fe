import React, { useState } from 'react';
import { createTodo } from '../services/Api';

export const TodoForm = ({ onTodoAdded }) => {
  const [title, setTitle, description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = await createTodo({ title, description, isCompleted: false });
    onTodoAdded(newTodo);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Новая задача"
      />
      <input
        type="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание задачи"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};