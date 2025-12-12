import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList'; // Ensure correct extension

// 1. Initial Render Test
test('renders initial list of todos', () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  expect(screen.getByText(/Test the App/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Add new todo/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
});

// 2. Test Adding Todos
test('allows user to add a new todo', () => {
  render(<TodoList />);
  const inputElement = screen.getByTestId('new-todo-input');
  const addButton = screen.getByRole('button', { name: /Add/i });
  const newTodoText = 'Walk the dog';

  fireEvent.change(inputElement, { target: { value: newTodoText } });
  fireEvent.click(addButton);

  expect(screen.getByText(/Walk the dog/i)).toBeInTheDocument();
  expect(inputElement.value).toBe('');
});

// 3. Test Toggling Todos
test('allows user to toggle a todo completion status', () => {
  render(<TodoList />);
  const todoItemText = screen.getByText(/Learn React/i);

  // Initial state should not have line-through
  expect(todoItemText).not.toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoItemText);

  // After click, it should have line-through style
  expect(todoItemText).toHaveStyle('text-decoration: line-through');
});

// 4. Test Deleting Todos
test('allows user to delete a todo', () => {
  render(<TodoList />);
  const todoText = 'Learn React';
  const todoItem = screen.getByText(todoText);

  // Find the specific delete button next to the 'Learn React' text
  const listItem = todoItem.closest('li');
  const deleteButton = screen.getByRole('button', { name: /Delete/i, container: listItem });
  
  fireEvent.click(deleteButton);

  // Verify the todo item is removed from the document
  expect(todoItem).not.toBeInTheDocument();
});
