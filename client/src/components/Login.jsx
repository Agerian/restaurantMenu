import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
// import { useNavigate } from 'react-router-dom'; I believe we can remove
import { LOGIN_USER } from '../utils/mutations';
import AuthService from '../utils/auth';
import { useOutletContext } from 'react-router-dom';

function LoginForm() {
  const [isAuthenticated, setIsAuthenticated] = useOutletContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { username, password }
      });
      setIsAuthenticated(true);
      AuthService.login(data.login.token);


    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {error && <p>Error: {error.message}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;