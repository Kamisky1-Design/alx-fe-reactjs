import React, { useState } from 'react';
import TodoItem from './TodoItem'; 
import AddTodoForm from './AddTodoForm'; 

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a Todo App', completed: true },
    { id: 3, title: 'Test the App', completed: false },
  ]);

  const addTodo = (title) => { /* ... (addTodo implementation is fine) ... */
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => { /* ... (toggleTodo implementation is fine) ... */
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => { /* ... (deleteTodo implementation is fine) ... */
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list-container"> {/* Use simple class name */}
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      ) : (
        <p>No todos found.</p> // Simplified message
      )}
    </div>
  );
};

export default TodoList;
