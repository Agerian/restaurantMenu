import React, { useState } from 'react';

function DeleteUserForm({ onDelete }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onDelete function passed as a prop
    onDelete(username);
    // Clear the input field after submission
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <button type="submit">Delete User</button>
    </form>
  );
}

export default DeleteUserForm;