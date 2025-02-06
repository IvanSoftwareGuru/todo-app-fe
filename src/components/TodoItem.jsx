import React from 'react';
import { updateTodo, deleteTodo } from '../services/Api';

export const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const handleToggle = async () => {
    const updatedTodo = await updateTodo(todo.id, {
      ...todo,
      isCompleted: !todo.isCompleted,
    });
    onUpdate(updatedTodo);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleToggle}
      />
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>Удалить</button>
    </div>
  );
};