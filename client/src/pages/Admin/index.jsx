import React from 'react';
import LoginForm from '../../components/Login';
import SignupForm from '../../components/Signup';
import DeleteUserForm from '../../components/DeleteUser';

function Admin() {
  return (
    <div>
      <div>Login</div>
      <LoginForm />
      <div>Sign Up</div>
        <SignupForm />
      <div>Delete User</div>
        <DeleteUserForm />
    </div>
  );
}

export default Admin;