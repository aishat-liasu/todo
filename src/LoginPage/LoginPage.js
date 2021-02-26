import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [users, updateUsers] = useState([]);
  let user1 = '',
    history = useHistory();

  useEffect(() => {
    const requestData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': 'TODO_BG_ygehfjdfbjhfeub83urj3urnuur83rn3',
      },
    };
    const userURL =
      'https://todo-bg.herokuapp.com/index.php/api/users/syncDown';

    fetch(userURL, requestData)
      .then((resp) => resp.json())
      .then((usersAPI) => {
        updateUsers(usersAPI.users);
      });
  }, []);
  console.log(users.length);

  const loginForm = (e) => {
    e.preventDefault();

    let boolean1 = false,
      boolean2 = false;
    users.forEach((user) => {
      if (user.email === email && user.password === password) {
        boolean1 = true;
        user1 = user;
      } else if (user.email === email && user.password !== password) {
        boolean2 = true;
      }
    });

    console.log(users);
    if (boolean1) {
      console.log('You have been successfully logged in');
      history.push({
        pathname: './todopage',
        data: user1,
      });
    }
    if (boolean2) {
      alert('Wrong Password');
    }
    if (!boolean2 && !boolean1) {
      alert('Kinldy wait for the site to load');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={loginForm} className="login-form">
        <label htmlFor="user-email">
          Email
          <input
            type="email"
            name="user-email"
            id="user-email"
            value={email}
            placeholder="xyz@example.com"
            onChange={(e) => updateEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="user-password">
          Password
          <input
            type="password"
            autoComplete="on"
            name="user-password"
            id="user-password"
            placeholder="234****"
            onChange={(e) => updatePassword(e.target.value)}
            required
          />
        </label>
        <div className="login-forgot">
          <button type="submit" className="btn">
            Login
          </button>
          <Link to="/forgotpassword">
            <button type="submit" className="btn">
              Forgot Password?
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
