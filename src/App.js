import React, { useEffect, useState } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/Api';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    loadTodos();
  }, []);

  const handleTodoAdded = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleTodoUpdated = (updatedTodo) => {
    setTodos(todos.map(t => t.id === updatedTodo.id ? updatedTodo : t));
  };

  const handleTodoDeleted = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onTodoAdded={handleTodoAdded} />
      <TodoList
        todos={todos}
        onUpdate={handleTodoUpdated}
        onDelete={handleTodoDeleted}
      />
    </div>
  );
}