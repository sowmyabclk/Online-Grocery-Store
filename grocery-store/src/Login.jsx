import React, { useState } from 'react';
import { fetchLogin } from './services';
import messages from './messages';
import spinner from './spinner.svg';


const Login = ({ onLogin, errorMessage }) => {

  const [username, setUsername] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const performLogin = () => {
    if (!username) {
      setError(messages.USERNAME_REQUIRED);
      return;
    }
    setError('');
    setIsLoading(true);
    fetchLogin(username)
      .then(() => {
        onLogin(username, {});
      })
      .catch((err) => {
        setError(messages[err.code || 'DEFAULT'] || err.code);
        setIsLoading(false);
      });
  };

  return (
    <div className="login">
      <label className="login-user">Username:</label><input className="user-info" placeholder="Enter User name" onChange={(e) => setUsername(e.target.value)} />
      <label className="login-password">Password:</label><input className="password-info" type="password" placeholder="Enter password" />

      {isLoading ?
        <img alt="spinner" src={spinner} /> :
        <button className="to-login" onClick={performLogin}>Login</button>
      }
      <p className="error">{error || errorMessage}</p>

    </div>

  );

};

export default Login;