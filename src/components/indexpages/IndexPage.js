import React from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router';

export default function IndexPage() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logout();
      navigate('/');
      console.log('you are log out');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <p className="mx-5 my-4">User Email: {user && user.email}</p>
      <button
        onClick={handleLogOut}
        className="border mx-5 px-6 py-2 my-4">
        Logout
      </button>
    </div>
  );
}
