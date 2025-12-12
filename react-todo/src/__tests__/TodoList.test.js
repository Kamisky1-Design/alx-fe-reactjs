import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList'; // No extension, Webpack handles it

// 1. Initial Render Test
test('renders initial list of todos', () => {
  render(<TodoList />);

  // Check if initial tasks are in the document
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  expect(screen.getByText('Test the App')).toBeInTheDocument();
  
  // Check that the "Build a Todo App" item is completed (line-through style)
  expect(screen.getByText('Build a Todo App')).toHaveStyle('text-decoration: line-through');

  // Check form elements exist
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

  // Verify the new todo item appears in the list and has correct style (not completed)
  const newItem = screen.getByText(/Walk the dog/i);
  expect(newItem).toBeInTheDocument();
  expect(newItem).not.toHaveStyle('text-decoration: line-through');
  expect(inputElement.value).toBe('');
});

// 3. Test Toggling Todos
test('allows user to toggle a todo completion status', () => {
  render(<TodoList />);
  const todoItemText = screen.getByText('Learn React'); // Starts as incomplete

  // Check initial state
  expect(todoItemText).not.toHaveStyle('text-decoration: line-through');

  // Simulate click to toggle
  fireEvent.click(todoItemText);

  // Check the style changed after click
  expect(todoItemText).toHaveStyle('text-decoration: line-through');
  
  // Click again to toggle back
  fireEvent.click(todoItemText);
  
  // Check the style reverted
  expect(todoItemText).not.toHaveStyle('text-decoration: line-through');
});

// 4. Test Deleting Todos
test('allows user to delete a todo', () => {
  render(<TodoList />);
  const todoText = 'Learn React';
  const todoItem = screen.getByText(todoText);
  expect(todoItem).toBeInTheDocument();

  // A robust query for the delete button specific to the item
  const deleteButton = screen.getByRole('button', { name: /Delete/i, container: todoItem.closest('li') });
  
  fireEvent.click(deleteButton);

  // Verify the todo item is removed from the document
  expect(todoItem).not.toBeInTheDocument();
});
