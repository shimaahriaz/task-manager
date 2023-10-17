import React, { useState } from 'react';
import './Login.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }


    alert(`Logged in as: ${username}`);
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        className='login'
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className='login'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='login-button' onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
