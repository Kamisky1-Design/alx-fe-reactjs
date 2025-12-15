import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Test the App')).toBeInTheDocument();
  });

  test('adds a todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('new-todo-input');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    fireEvent.click(todo.nextSibling);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
