import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_PROFILE } from '../utils/mutations';
import Authservice from '../utils/auth';
import { useOutletContext } from 'react-router-dom';


function SignupForm() {
  const [isAuthenticated, setIsAuthenticated] = useOutletContext();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addProfile, { error }] = useMutation(ADD_PROFILE);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addProfile({
        variables: { username, email, password }
      });
      setIsAuthenticated(true);
      Authservice.login(data.addProfile.token);

    } catch (err) {
      console.error('Signup failed:', err);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;