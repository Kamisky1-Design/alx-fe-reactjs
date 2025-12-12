import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle(''); // Clear input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        data-testid="new-todo-input"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
