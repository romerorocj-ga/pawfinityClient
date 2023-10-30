import React from 'react';
import { Link } from 'react-router-dom';
import './UserLogOut.css';

export default function UserLogOut({ user, setUser }) {
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div className="UserLogOut">
      {user && (
        <div className="user-info">
          <p>Hello, {user.name}</p>
        </div>
      )}
      <div className="logout-button">
        {user ? (
          <button onClick={handleLogOut}>LOG OUT</button>
        ) : (
          <Link to="/login">LOG IN</Link>
        )}
      </div>
    </div>
  );
}
