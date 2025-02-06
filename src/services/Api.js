import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/todos';

export const getTodos = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createTodo = async (todo) => {
  const response = await axios.post(API_BASE_URL, todo);
  return response.data;
};

export const updateTodo = async (id, updatedTodo) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedTodo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};