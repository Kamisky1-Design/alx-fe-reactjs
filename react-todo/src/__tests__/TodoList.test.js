import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders initial list of todos', () => {
  render(<TodoList />);

  const items = screen.getAllByTestId('todo-item');
  expect(items.length).toBe(3);

  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toHaveStyle(
    'text-decoration: line-through'
  );
});

test('adds a new todo', () => {
  render(<TodoList />);

  const input = screen.getByTestId('new-todo-input');
  const button = screen.getByRole('button', { name: /add/i });

  fireEvent.change(input, { target: { value: 'Walk the dog' } });
  fireEvent.click(button);

  expect(screen.getByText('Walk the dog')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);

  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);

  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);

  const deleteButton = screen.getAllByTestId('delete-button')[0];
  fireEvent.click(deleteButton);

  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
