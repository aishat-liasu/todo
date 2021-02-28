import React from 'react';
import '../TodoPage/TodoPage.css';
import './LogoutPage.css';
import { useLocation, Link } from 'react-router-dom';

const LogoutPage = () => {
  const location = useLocation();
  return (
    <div className="logout-page">
      <h1>Goodbye {location.data}</h1>
      <Link to="/">
        <button className="login-back-btn">Login Back?</button>
      </Link>
    </div>
  );
};

export default LogoutPage;
