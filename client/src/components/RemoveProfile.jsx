//use this component instead of the previous deleteprofile.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_PROFILE } from '../utils/mutations';
import Authservice from '../utils/auth';

function RemoveProfile() {
  const [username, setUsername] = useState('');
  const [removeProfile, { error }] = useMutation(REMOVE_PROFILE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await removeProfile({ variables: { username } });
      Authservice.logout(); 
    } catch (err) {
      console.error('Profile deletion failed:', err);
    }
  };

  return (
    <div>
      <h2>Remove Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button type="submit">Remove Profile</button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
}

export default RemoveProfile;