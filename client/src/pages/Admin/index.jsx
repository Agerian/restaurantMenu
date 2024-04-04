import React from 'react';
import { useOutletContext } from 'react-router-dom'; // Import useOutletContext hook
import LoginForm from '../../components/Login';
import SignupForm from '../../components/Signup';
import MIM from '../../components/MIM'; // Adjust the import path as necessary

function Admin() {
  const [isAuthenticated] = useOutletContext(); // Use the hook to consume the authentication state
  
  // Conditionally render content based on isAuthenticated state
  if (isAuthenticated) {
    return <MIM />; // Show the MIM component when the user is authenticated
  } else {
    // Show the login, signup, and delete user forms when not authenticated
    return (
      <div>
        <div>Login</div>
        <LoginForm />
        <div>Sign Up</div>
          <SignupForm />
      </div>
    );
  }
}

export default Admin;
