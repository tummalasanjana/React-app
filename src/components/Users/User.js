import React from 'react';
import './Users.css';

function User({ user, setUser = () => { } }) {
  return (
    <div className="Users-row">
      <div className="Users-container" onClick={() => setUser(user)}>
        <img src={user.avatar_url} alt={user.login} className="Users-photo" />
        <div className="Users-name">{user.login}</div>
      </div>
    </div>
  )
}

export default User;
