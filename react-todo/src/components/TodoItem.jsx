import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      data-testid="todo-item"
      onClick={() => onToggle(todo.id)}
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      {todo.title}

      <button
        data-testid="delete-button"
        onClick={(e) => {
          e.stopPropagation(); // prevent toggle when deleting
          onDelete(todo.id);
        }}
        style={{ marginLeft: '10px' }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
