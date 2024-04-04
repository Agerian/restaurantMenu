import React from 'react';
import LoginForm from '../../components/Login';
import SignupForm from '../../components/Signup';
import RemoveProfile from '../../components/RemoveProfile';


function Admin() {
  return (
    <div>
      <div>Login</div>
      <LoginForm />
      <div>Sign Up</div>
        <SignupForm />
      <div>Delete User</div>
        <RemoveProfile />
    </div>
  );
}

export default Admin;