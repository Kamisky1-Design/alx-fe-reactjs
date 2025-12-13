import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {

  test('renders initial list of todos', () => {
    render(<TodoList />);

    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Test the App')).toBeInTheDocument();
  });

  test('allows user to add a new todo', () => {
    render(<TodoList />);

    const input = screen.getByTestId('new-todo-input');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Walk the dog' } });
    fireEvent.click(button);

    expect(screen.getByText('Walk the dog')).toBeInTheDocument();
  });

  test('allows user to toggle a todo', () => {
    render(<TodoList />);

    const todo = screen.getByText('Learn React');
    fireEvent.click(todo);

    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('allows user to delete a todo', () => {
    render(<TodoList />);

    const todo = screen.getByText('Learn React');
    const deleteButton = todo.closest('li').querySelector('button');

    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

});
